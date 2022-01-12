import {buffer} from 'micro';
import * as admin from 'firebase-admin';


//secure a connection to FIREBASE from backend
const serviceAccount=require('../../permissions.json');
//now initialising app but also preventing dounle initialisation i.e checking whether it's already initialised(then it must have some length) or not 
const app=!admin.apps.length ? admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
}) : admin.app() ;


//establishing a connection to stripe
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);

//getting endpoint secret
const endpointSecret=process.env.STRIPE_SIGNING_SECRET ;


//fulfilling the order(put it in inside the database, so that we can show in future that here this order is done )
const fulfillOrder=async (session)=>{
    console.log('Fulfilling order ',session);

    return app.firestore().collection('users').doc(session.metadata.email).collection('orders').doc(session.id).set({
        amount:session.amount_total/100,
        amount_shipping:session.total_details.amount_shipping/100,
        images:JSON.parse(session.metadata.images),
        timestamp:admin.firestore.FieldValue.serverTimestamp()
    }).then(()=>{
        console.log(`success: order ${session.id} has been added to database`);
    })
}


export default async (req,res)=>{
    if(req.method=== 'POST') //we write like this in next.js, else in express we write like app.get
    {
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers["stripe-signature"];
        
        let event;

        //verify that the event came from stripe
        try{
            event=stripe.webhooks.constructEvent(payload,sig,endpointSecret);
        }catch(err){
            console.log('ERROR ',err.message);
            return res.status(400).send(`webhook error: ${err.message}`)
        }

        //handle the special completed checkout session, if no error occurs
        if(event.type==='checkout.session.completed'){
            const session=event.data.object;

            //fulfilling the order(put it in inside the database, so that we can show in future that here this order is done )
            return fulfillOrder(session).then(()=>res.status(200)).catch((err)=>res.status(400).send(`webhook error :${err.message}`))
        }
    }
};

export const config={
    api:{
        bodyParser:false,
        externalResolver:true,
    }
}
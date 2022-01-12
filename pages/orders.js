//here we show the products from combination from firebase databse and stripe

import moment from "moment" //A JavaScript date library for parsing, validating, manipulating, and formatting dates.(used in showing time-stamp for stripe data after fetching from firebase)
import { getSession, useSession } from "next-auth/react"
import Header from "../components/Header"
import Order from "../components/Order"
import db from "../firebase"


const Orders = ({orders}) => {
    const { data:session, status} = useSession() //this helps in accessing the user details(by next-auth.js) who is loggin-in; 

    console.log(orders);
    return (
        <div>
            <Header/>
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b-4 mb-2 pb-1 border-yellow-400">Your Orders</h1>
                {/* if user is loggen in then show order text else show to login */}
                {session? (
                    <h2>{orders.length} Orders</h2>
                ):(
                    <h2>Please sign in to see your orders</h2>
                )}

                <div className="mt-5 space-y-4">

                    {orders?.map((item)=>(
                        <Order
                            key={item.id}
                            id={item.id}
                            amount={item.amount}
                            amountShipping={item.amountShipping}
                            items={item.items}
                            images={item.images}    
                        />
                    ))}
                </div>

            </main>
        </div>
    )
}

export default Orders;

//now getting orders from SSR becoz to fetch data before page loads so that user doesn't see any blank screen data
//anything in SSR is node.js
export async function getServerSideProps(context){

    //getting stripe
    const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);

    //getting user credentials (getting from server render not from useSession of frontend)
    //await kro, else it will try to access
    const session= await getSession(context);

    if(!session){
        //if server is empty(no session) we return empty props, don't continue any execution
        return{
            props:{},
        }
    }

    //else if there is session
    //getting details from firebase
    const stripeOrders=await db.collection("users").doc(session.user.email).collection('orders').orderBy('timestamp','desc').get();

    //stripe orders
    //here going through every single doc in firebase, thus we have to go through a loop and make a request(async),thus we wrap it in promises aso that it will wait until all those promises is resolved and get proceed
    const orders= await Promise.all(
        stripeOrders.docs.map(async(order)=>({
            //implicit returning becoz used ({}) brackets
            id:order.id,
            amount:order.data().amount,
            amountShipping:order.data().amount_shipping,
            images:order.data().images,

            //when u have a firebase timestamp, then in order send across times must use unix(make in number format) and moment(fetch time and date) in order to have no loss.
            //timestamp:moment(order.data().timestamp.toDate()).unix,

            //fetching info and then accessing, and this is aynchronous
            items:(
                await stripe.checkout.sessions.listLineItems(order.id,{limit:100})
            ).data,
        }))
    )

    //this means orders props me bhej skte, see props of the function
    return {
        props:{
            orders,
        }
    }



}

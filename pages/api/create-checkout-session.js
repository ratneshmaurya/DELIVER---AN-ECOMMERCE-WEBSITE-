const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);

console.log(process.env.STRIPE_SECRET_KEY)

export default async (req,res)=>{
    //as we have passed the items and email of user during making request from checkout page, thus here destructiong them(as they come inside req variable)
    const {items,email}=req.body;
    // console.log(items);
    // console.log(email);

    //now we have to push details to stripe (remember the format mjust be in which stripe accept the data, see it on official website)
    //implicit return is happening i.e using ({}) in map , we are taking every item and returning it back in the object and saving in the array name =transformedItems
    const transformedItems=items.map(item=>({
        description:item.description,
        quantity:1, //if grouping krr rhe similar products ki then quantity modify krna uske hisaab se , see on net
        price_data: {
            currency: 'INR',
            unit_amount:item.price* 10000, //as stripe takes amount in sub-price i.e convert them to paise, as i am getting price in euros from fakestore-api, thus converting euro to paise(I am making roundoff conversion not exact)
            product_data: {
              name: item.title,
              images:[item.image],
            },
          },
    }));

    //now giving products to stripe to show(create) the payment stripe checkout page
    const session=await stripe.checkout.sessions.create({
        payment_method_types:["card"],

        //created the shipping rates on the stripe website and adding here to show on payment session (check in products section on website)
        shipping_rates:['shr_1KGl3aSBAq7TkkUEBHAEW4sS'],

        //adding the shipping countries
        shipping_address_collection:{
            allowed_countries:['IN','NP','US']
        },
        line_items:transformedItems, //line items is all objects that we are giving to show in order in chekout payment page of stripe
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,//cancel page(if error occur or user cancel the page)

        //important thing- allow us to push correct info from stripe page to firebase
        metadata:{
            email:email,
            images:JSON.stringify(items.map(item=>item.image)),
        }
    });


    //for reply after API calls(according to rule, that's it)
    //as we have created the stripe session above(by giving the products to stripe), and in response it gives us the session id(we will use this in checkout component for redirecting user to stripe checkout)
    res.status(200).json({id:session.id});

};
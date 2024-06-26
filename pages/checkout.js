import Header from "../components/Header"
import Image from "next/image"

//redux store concepts
import { useSelector } from "react-redux"
import { selectItems } from "../redux/basketSlice" //this gives us access to all items of redux-store
import { selectTotal } from "../redux/basketSlice" //this gives us access to total price of all items of redux-store

import CheckoutProducts from "../components/CheckoutProducts"

import { useSession } from "next-auth/react" //for checking the login and telling user to login before checkout 

//for stripe payments
import {loadStripe} from "@stripe/stripe-js";
const stripePromise= loadStripe(process.env.stripe_public_key); //taking from next.config file
import axios from "axios"


const Checkout = () => {
    const items=useSelector(selectItems);//this gives us access to all items of redux-store
    const totalPrice=useSelector(selectTotal);//this gives us access to total price of all items of redux-store


    const { data:session,} = useSession(); //for checking the login and telling user to login before checkout 

    //now when user clicks the checkout button then this function works and send the products details to stripe session
    const createCheckoutSession=async()=>{
        //getting instance asynchronously else tones of instance can be loaded if not done by async
        const stripe= await stripePromise;

        //now we have to call our own created backend Paytment api endpoint to have checkout session.
        //making post request from create-checkout-seesion component along with some data (items and email)
        const checkoutSession=await axios.post('/api/create-checkout-session',{
            items:items,
            email:session.user.email,
        })

        //redirecting user to stripe checkout(as we are getting id from stripe,for proof see the create-checkout-session component)
        //as first we have requested the backend(of stripe), then backend makes the checkout session and comes back to the user(frontend) and then frontend(this below code) redirects them to the checkoutpage and at that point if success happens then we head to the success page else cancel page(if error occur or user cancel the page)
        const result=await stripe.redirectToCheckout({
            sessionId:checkoutSession.data.id,
        });

        //if any error then alert us
        if(result.error) alert(result.error.message);
    };

    return (
        <div className="bg-gray-100">
            <Header/>
            {/* have some max-width , hence it not cover the full screen , see it in real */}
            {/* only after the large screen , it comes in flex-row else columnwise rhe */}
            <main className="lg:flex max-w-screen-2xl mx-auto">
              

                {/* left section  */}
                <div className="flex-grow m-5 shadow-md">
                    <Image
                        src="https://images.unsplash.com/photo-1561451213-d5c9f0951fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fE94eW50Sm9CREZZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1100&q=60"
                        height={600}
                        width={2080}
                        objectFit="cover"
                    ></Image>

                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="font-bold text-3xl border-b pb-4">
                            {
                                items.length==0 ? "Your cart is empty, Go and Buy something" : "Your Shopping Basket"
                            }
                        </h1>
                        

                        {/* now showing the products section from here and also keeping responsiveness in mind */}
                        {
                            items.map((item,i)=>(
                                <CheckoutProducts
                                    key={i}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    description={item.description}
                                    category={item.category}
                                    image={item.image}
                                    hasPrime={item.hasPrime}
                                />
                            ))
                        }
                    </div>
                </div>

                {/* rigth section */}
                <div className="flex flex-col bg-white p-10 shadow-md m-5">
                    {items.length>0  && (
                        <>
                            <h2 className="font-bold">Subtotal - {items.length} items</h2>
                            <span className="font-bold">
                                ₹{(totalPrice * 100).toFixed(2)}
                            </span>

                            <button role="link" 
                            onClick={createCheckoutSession} //onclicking, we are creating a checkout session page
                            disabled={!session} 
                            className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed'}`}>
                                {
                                    !session ? "Sign-In to checkout" : "Proceed to checkout"
                                }
                            </button>
                        </>
                    )}
                </div>

            </main>
        </div>
    )
}

export default Checkout

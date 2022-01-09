
import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { addToBasket,removeFromBasket, selectItems } from "../redux/basketSlice"

const CheckoutProducts = ({ id,title,price,rating,description,category,image,hasPrime}) => {

    const dispatch = useDispatch();
    const addItemToBasket=()=>{
        const product={id,title,price,rating,description,category,image,hasPrime};

        //pushing more items if user clicks the add more button on the checkoutproduct page
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket=()=>{
        //removing items if user clicks the remove button on the checkoutproduct page
        dispatch(removeFromBasket({id}));
    }

    return (
        <div className="grid grid-cols-5">
            {/* left seciton */}
            <Image src={image} height={200} width={200} objectFit="contain"/>

            {/* middle section */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i)=>(<StarIcon key={i} className="h-5 text-yellow-500"></StarIcon>))}
                </div>
                <p>₹ {price * 100}</p>
                {
                    hasPrime && (
                        <div className="flex items-center space-x-2">
                            <img loading="lazy" className="w-12" src="https://thumbs.dreamstime.com/b/amazon-prime-logo-blue-text-arrow-amazon-prime-logo-200139436.jpg" alt="primelogo" />
                            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                        </div>
                )}
            </div>

            {/* right section of buttons for adiign and removing */}
            <div className="flex flex-col space-y-3 my-auto">
                <button className="button" onClick={addItemToBasket}>Add more to Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProducts

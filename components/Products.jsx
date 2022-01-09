import Image from "next/image"
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

import { useDispatch } from "react-redux"; //for dispatching to redux store
import { addToBasket } from "../redux/basketSlice"; //function of redux store for storing products

const Max_rating=5;
const Min_rating=1;

const Products = ({id,title,price,description,category,image}) => {

    const dispatch = useDispatch();
    const addItemToBasket=()=>{
        //now taking our whole products info and dispatching to store
        const product={
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };

        //sending the product as an action to the redux store(i.e to basket slice)
        dispatch(addToBasket(product));
    }

    const[rating]=useState(
        Math.floor(Math.random()*(Max_rating-Min_rating + 1))+Min_rating
    );

    //for applying hasPrime randomly 
    const [hasPrime]=useState(Math.random() < 0.5);

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 transform transition duration-500 hover:scale-105">
            
            {/* making absolute so that category ko hm upper right corner me likh ske aaram se */}
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">
                {category}
            </p>

            <Image src={image} height={200} width={200} objectFit="contain"/>

            <h4 className="my-4">
                {title}
            </h4>

            {/* making random stars rating , making array of ratings and filling with empty values and running map on it to show staricon that mush times*/}
            <div className="flex">
                {Array(rating).fill().map((_,i)=>(<StarIcon key={i} className="h-5 text-yellow-500"/>))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            {/* as the price is in euros in API */}
            <div className="mb-5">₹ {price * 100}</div>

            {/* showing prime image for random products */}
            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://thumbs.dreamstime.com/b/amazon-prime-logo-blue-text-arrow-amazon-prime-logo-200139436.jpg" alt="primelogo" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

            <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
        </div>
    );
}

export default Products;

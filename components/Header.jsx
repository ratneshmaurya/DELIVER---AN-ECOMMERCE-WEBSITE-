import Image from "next/image"

import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon, 
} from "@heroicons/react/outline";


const Header = () => {
    return (
        // giving z-index:20 , because i have given x:index-10 to products cards , because i have shifted them a little bit on to banner , see products in website
        <header className="sticky top-0 left-0 z-40">

        {/* top nav */}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    <Image 
                    src="https://cdn.pixabay.com/photo/2017/02/18/14/02/letters-2077229_1280.png" 
                    width={80} 
                    height={40} 
                    objectFit='contains' 
                    className='cursor-pointer'/>
                </div>

            {/* search bar  */}
                {/* hidden on screen smaller than sm: , then display as flex */}
                <div className="hidden sm:flex items:center h-11 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"/>
                    <SearchIcon className="h-full p-4"/>
                </div>

            {/* right side */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link"> {/* here link is our utility made class by me , created in global css */}
                        <p >Hello Ratnesh Maurya</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black  font-bold">0</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline mt-2 font-extrabold md:text-sm">Basket</p>
                    </div>
                </div>
            </div>



        {/* bottom nav */}
        <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
            <p className="link flex items-center">
                <MenuIcon className="h-6 mr-1"/>
                All
            </p>
            <p className="link">Business </p>
            <p className="link">Today's Deals</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Food & Grocery</p>
            <p className="link hidden lg:inline-flex">Prime</p>
            <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        </div>

        </header>
    )
}

export default Header

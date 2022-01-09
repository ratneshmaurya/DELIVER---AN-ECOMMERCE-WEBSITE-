import { createSlice } from "@reduxjs/toolkit";


//basketSlice has a global variable items
const initialState={
    items:[],
};

export const basketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        // for dispatching we need the actions, here we have two actions ,action.payload helps to acess them
        addToBasket:(state,action)=>{
            state.items=[...state.items, action.payload]
        },

        //now we are getting only the id of product from checkoutProducts page for removing the items 
        removeFromBasket:(state,action)=>{

            //we are going through every basketItem and checking jis id ka hum remove krna chah rhe uska index de de.(if not found then returns -1)
            const index=state.items.findIndex((basketItem)=>basketItem.id===action.payload.id);

            let newBasket=[...state.items]; //we will use this in updating the remaining basket items

            if(index>=0){
                //remove the item ,becoz it is present in the list
                //remember not using filter , becoz it will remove all items of same id , becoz ek shirt agr 5 baar liye hoge toh sbko remove kr dega
                newBasket.splice(index,1);
            }
            else{
                console.warn(`cant remove the items , becoz not present in the cart , id of the product is ${action.payload.id}`);
            }

            state.items=newBasket; //updating the remaining products in the basket
        },
    },
});

//making these two actions available for dispatchings
export const {addToBasket,removeFromBasket}=basketSlice.actions;


//helps in acessing the global store value
export const selectItems=(state)=>state.basket.items;

//here calculating toatl price of store products using reduce function and exporting it so that we can directly show the tota price on checkout page
//we are looping through every item of redux-store with having initial total value as 0
export const selectTotal=(state)=>state.basket.items.reduce((total,item)=>total+item.price  ,   0);

//exporting our basketReducer
export default basketSlice.reducer;

// export const basketReducer = basketSlice.reducer;
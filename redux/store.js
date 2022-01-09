import {configureStore} from "@reduxjs/toolkit"
import basketReducer from "./basketSlice"

//our global store setup
const store = configureStore({

    // we have one slice(i.e basketReducer of basketSlice) inside our store
    reducer:{
        basket:basketReducer,
    },

  });
  
export default store;



import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import prodctReducer from "./features/productSlilce"
import LoadingReducer from "./features/LoadingReducer"
export const store =configureStore({

    reducer:{

        cartReducer,
      prodctReducer,
        LoadingReducer,

    },
    devTools:process.env.NODE_ENV !== "production"
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
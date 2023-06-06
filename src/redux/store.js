
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'


export const store = configureStore({
    reducer: {
        // add reducers here
        // products: productSlice,
        cart: cartSlice

    }
})
import items from './itemsSlice';
import cart from './cartSlice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        items: items,
        cart: cart
    },
})
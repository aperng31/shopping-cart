import quantityReducer from "./quantity";
import { configureStore } from "@reduxjs/toolkit"

export default configureStore({
    reducer: {
        quantity: quantityReducer
    }
})

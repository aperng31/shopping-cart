import { createSlice, current } from "@reduxjs/toolkit"

export const quantitySlice = createSlice({
    name: "quantity",
    initialState: {
        cart: [], //{name, quantity}
        totalItems: 0
    },
    reducers: {
        ADD_QUANTITY: (state, action) => {
            const { name, quantity } = action.payload;
            const nameArr = state.cart.map(item => item.name)
            if (nameArr.includes(name)) {
                state.cart = state.cart.map(item => {
                    if(item.name === name) {
                        item.quantity += +quantity;
                    }
                    return item;
                })
            }
            else {
                state.cart.push( { name, quantity });
            }
            state.totalItems += quantity;
        },
        SET_QUANTITY: (state, action) => {
            const { name, quantity } = action.payload;
            const nameArr = state.cart.map(item => item.name)
            if (nameArr.includes(name)) {
                state.cart = state.cart.map(item => {
                    if(item.name === name) {
                        const diff = quantity - item.quantity;
                        state.totalItems += diff;
                        item.quantity = +quantity;
                    }
                    return item;
                })
            }
        },
        REM_QUANTITY: (state, action) => {
            const name = action.payload;
            state.cart = state.cart.filter((item) => {
                if (name === item.name)
                {
                    state.totalItems -= +item.quantity;
                    return false;
                }
                else { return true }
            }) //remove item entirely, so use filter
        }
    }
});

export const { ADD_QUANTITY, SET_QUANTITY, REM_QUANTITY } = quantitySlice.actions;
export default quantitySlice.reducer;
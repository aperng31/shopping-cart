import { createSlice, current } from "@reduxjs/toolkit"

export const quantitySlice = createSlice({
    name: "quantity",
    initialState: {
        cart: [], //{name, quantity}
        totalItems: 0
    },
    reducers: {
        ADD_QUANTITY: (state, { payload }) => {
            const { name, quantity } = payload;
            const nameArr = state.cart.map(item => item.name)
            if (nameArr.includes(name)) {
                state.cart = state.cart.map(item => {
                    if(item.name === name) {
                        item.quantity += quantity;
                    }
                    return item;
                })
            }
            else {
                state.cart.push( { name, quantity });
            }
            state.totalItems += quantity;
            // console.log(current(state).cart);
            // console.log(current(state).totalItems);
        },
        SET_QUANTITY: (state, action) => {
            state.quantity = action.payload;
        },
        REM_QUANTITY: (state) => {
            state.quantity = 0;
        }
    }
});

export const { ADD_QUANTITY, SET_QUANTITY, REM_QUANTITY } = quantitySlice.actions;
export default quantitySlice.reducer;
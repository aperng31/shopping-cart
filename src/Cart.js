import React from "react";
import { useSelector } from "react-redux";
import quantity from "./reducers/quantity";

const Cart = () => {
  const cart = useSelector((state) => state.quantity.cart);
  const total = useSelector((state) => state.quantity.totalItems);
  return (
    <div>
      <h3>My Cart</h3>
      <div>Total: {total}</div>
      {cart.map((item) => {
        return (
          <div>{ item.name }: { item.quantity }</div>
        ) 
      })}
    </div>
  );
};

export default Cart;
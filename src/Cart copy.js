import React from "react";
import { useSelector } from "react-redux";
import quantity from "./reducers/quantity";

const CartCard = ({ name, quantity }) => {
  // const cart = useSelector((state) => state.quantity.cart);
  // const total = useSelector((state) => state.quantity.totalItems);
  return (
    <div className="cart-card">
      <input type="image"></input>
    </div>
  );
};

export default CartCard;
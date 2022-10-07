import React from "react";
import data from "./data.json"
import "./styles/CartCard.css"
import { useSelector } from "react-redux";
import quantity from "./reducers/quantity";

const CartCard = ({ name, quantity }) => {
  const myShape = data[name];
  const myPrice = myShape.price;
  // const cart = useSelector((state) => state.quantity.cart);
  // const total = useSelector((state) => state.quantity.totalItems);
  return (
    <div className="cart-card">
      <input type="image" alt="delete" />
      <h3>{ name }</h3>
      <div>{ myPrice } x </div>
      <div>
        <div>{ quantity }</div>
        <input type="number" defaultValue={ quantity } style={{display: 'none'}} />
        <button>Edit</button>
        <button>Update</button>
      </div>
      <div>
        Total Item Cost: ${ quantity * myPrice }
      </div>
    </div>
  );
};

export default CartCard;
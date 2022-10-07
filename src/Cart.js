import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import data from "./data.json";
import './styles/Cart.css'
import quantity from "./reducers/quantity";

const Cart = () => {
  const cart = useSelector((state) => state.quantity.cart);
  const total = useSelector((state) => state.quantity.totalItems);

  const totalCost = cart.reduce((accum, item) => {
    return accum += item.quantity * data[item.name].price;
  }, 0)

  return (
    <div className="cart-container">
      <h3>My Cart</h3>
      {cart.map((item) => {
        return (
          <CartCard name={ item.name } quantity={ item.quantity }/>
        ) 
      })}
      <div className="totals">
        <div>Total Items: {total}</div>
        <div>Total Cost: ${ totalCost }</div>
      </div>
      
    </div>
  );
};

export default Cart;
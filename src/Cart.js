import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import data from "./data.json";
import './styles/Cart.css'
import quantity from "./reducers/quantity";

const Cart = () => {
  const cart = useSelector((state) => state.quantity.cart);
  const total = useSelector((state) => state.quantity.totalItems);


  const totalCost = Math.round(cart.reduce((accum, item) => {
    const myPrice = data.filter(shape => {return shape.name === item.name})[0].price;
    return accum += item.quantity * myPrice;
  }, 0) * 100) / 100;

  return (
    <div className="cart-container">
      <h3>My Cart</h3>
      { total === 0 ? <h2>Looks like you don't have anything yet :( </h2> : null }
      {cart.map((item) => {
        return (
          <CartCard name={ item.name } quantity={ item.quantity }/>
        ) 
      })}
      <div className="totals">
        <h3>Total Items: {total}</h3>
        <h3>Total Cart Cost: ${ totalCost.toFixed(2) }</h3>
      </div>
      
    </div>
  );
};

export default Cart;
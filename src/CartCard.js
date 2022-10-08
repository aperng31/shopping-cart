import React from "react";
import data from "./data.json"
import "./styles/CartCard.css"
import { useSelector, useDispatch } from "react-redux";
import { SET_QUANTITY, REM_QUANTITY } from "./reducers/quantity"
import quantity from "./reducers/quantity";
import images from "./imgs/index.js"

const CartCard = ({ name, quantity }) => {
  
  const myShape = data.filter(shape => {return name === shape.name})
  const myPrice = myShape[0].price;
  const inputQuant = React.useRef();
  const currQuant = React.useRef();
  const submitButton = React.useRef();
  const editButton = React.useRef();
  // const cart = useSelector((state) => state.quantity.cart);
  // const total = useSelector((state) => state.quantity.totalItems);
  const dispatch = useDispatch();

  function editQuantity() {
    inputQuant.current.style.display = 'block';
    editButton.current.style.display = 'none';
    currQuant.current.style.display = 'none';
    submitButton.current.style.display = 'block';
  }
  function updateQuantity() {
    const newQuant = inputQuant.current.value;
    inputQuant.current.style.display = 'none';
    submitButton.current.style.display = 'none';
    currQuant.current.style.display = 'block';
    editButton.current.style.display = 'block';
    dispatch(SET_QUANTITY({ name, quantity: newQuant }))
  }

  const totalItemCost = (Math.round(quantity * myPrice * 100) / 100).toFixed(2);

  return (
    <div className="cart-card">
      <input className="delButton" type="image" src={ images.trash } alt="delete" onClick={ () => dispatch(REM_QUANTITY(name)) }/>
      <input className="cart-image" type="image" src={ images[name] } alt={ name }/>
      <h2 className="shape-name">{ name }</h2>
      <div className="price-info">
        <div className="unit-price">
          <h3>${ myPrice.toFixed(2) }</h3>
          <h3>x</h3>          
        </div>
        <div className="current-quantity">
          <h3 ref={ currQuant }>{ quantity }</h3>
          <input className="edit-quantity" ref={ inputQuant } type="number" min="1" defaultValue={ quantity } style={{ display: 'none' }} />
        </div>
        <div className="quantity-button">
          <button ref={ editButton } onClick={ editQuantity }>Edit</button>
          <button ref={ submitButton } style={{ display: 'none' }} onClick={ updateQuantity }>Update</button>
        </div>
      </div>

      <div className="total-cost">
        <h3>
          Total Item Cost: ${ totalItemCost }
        </h3>        
      </div>

    </div>
  );
};

export default CartCard;
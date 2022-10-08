import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_QUANTITY } from "./reducers/quantity";
import "./styles/Card.css"

function Card({ name, imgSrc, price, key }) {
  const [myQuant, setQuant] = React.useState(0); //quantity to add, not in cart
  const [myKey, setKey] = React.useState(key);
  const ref = React.useRef(null);

  const quantity = useSelector((state) => state.quantity.quantity);
  const dispatch = useDispatch();

  function addToCart() {
    if(myQuant > 0) {
      dispatch(ADD_QUANTITY({ name, quantity: myQuant }));
      setQuant(0);
    }
  }

  useEffect( () => {
    if(myQuant > 0) {
      ref.current.disabled = false;
    }
    else {
      ref.current.disabled = true;
    }
  }, [myQuant])

  return (
    <div className='card'>
      <img className='card_img' alt="img" src={ require(`${imgSrc}`) }></img> 
      <h2 className='card_name'> { name }</h2>
      <div className="quantity-div">
        <h3>Quantity:</h3>
        <button ref={ ref } className="quant-button" onClick={ () => setQuant(myQuant - 1) } >-1</button>  
        <h3>{ myQuant }</h3>
        <button className="quant-button" onClick={ () => setQuant(myQuant + 1) }>+1</button>  
      </div>
      <h3 className="shape-price">Price: ${ price.toFixed(2) }</h3>
      <button className="addToCart" onClick={ addToCart }>Add to Cart</button>
    </div>
  )
}

export default Card;
import React from "react";
import "./styles/Card.css"

function Card({ name, imgSrc, key }) {
  // const [myName, setName] = React.useState(name);
  // const [image, setImage] = React.useState(imgSrc);
  // const [key, setKey] = React.useState(key);
  const [myQuant, setQuant] = React.useState(0); //quantity to add, not in cart
  const [myKey, setKey] = React.useState(key);

  function addToCart() {
    //add current quantity to cart
    setQuant(0);
  }

  //method to toggle disable for minus quantity, use useEffect?

  return (
    <div className='card'>
      <img className='card_img' alt="img" src={ require(`${imgSrc}`) }></img> 
      <h2 className='card_name'> { name }</h2>
      <div className="quantity-div">
        <button onClick={ () => setQuant(myQuant - 1) } disabled={ true }>-1</button>  
        <h2>{ myQuant }</h2>
        <button onClick={ () => setQuant(myQuant + 1) }>+1</button>  
      </div>

    </div>
  )
}

export default Card;
import React from "react";
import data from "./data.json"
import Card from "./Card";
import uniqid from "uniqid";
import "./styles/Shop.css"

const Shop = () => {

  const myShapesData = (data);
  console.log(myShapesData);
  
  const myShapesArr = myShapesData.map((shape) => {
    return (
      <Card name={shape.name} imgSrc={shape.imgSrc} price={shape.price}/>
    )
  })
  return (
    <div className="shop-container">
      { myShapesArr }
    </div>
  );
};

export default Shop;
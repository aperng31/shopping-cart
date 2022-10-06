import React from "react";
import data from "./data.json"
import Card from "./Card";
import uniqid from "uniqid";

const Shop = () => {

  const myShapesData = data.shapes; //array of shapes
  
  const myShapesArr = myShapesData.map((shape) => {
    return (
      <Card name={shape.name} imgSrc={shape.imgSrc} />
    )
  })
  return (
    <div>
      <h3>My Shop</h3>
      {/* { myShapes } */}
      { myShapesArr }
    </div>
  );
};

export default Shop;
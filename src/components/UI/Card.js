import React from "react";

import "./Card.css";


//Card are used to wraps the divs inside one conatainer
function Card(props) {
  const classes = "card " + props.className; // after adding this ,now the main card wrapper will conatain both the css one if of itself and other is of conatainer given by the user

  return <div className={classes}>{props.children}</div>;//props.children will allow us to wrap the divs inside the card otherwise no content will be displayed
}
export default Card;

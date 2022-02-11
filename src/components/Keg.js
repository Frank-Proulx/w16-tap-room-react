import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  let checkPints;
  if (props.pintsRemaining < 1) {
    checkPints = "Sold out"
  } else {
    checkPints = <button onClick={() => props.onReducingPints(props.index)}>Sell a pint</button>;
  }
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>Beer Name: {props.name}</h3>
        <p>Brand: {props.brand}</p>
        <p>Price: ${props.price}</p>
        <p>Alcohol Content: {props.alcoholContent}%</p>
        <p>Pints Remaining: {props.pintsRemaining}</p>
      </div>
      {checkPints}
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pintsRemaining: PropTypes.number,
  whenKegClicked: PropTypes.func
};

export default Keg;
import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>Beer Name: {props.name}</h3>
        <p>Brand: {props.brand}</p>
        <p>Price: ${props.price}</p>
        <p>Alcohol Content: {props.alcoholContent}%</p>
        <p>Pints Remaining: {props.pintsRemaining}</p>
      </div>
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
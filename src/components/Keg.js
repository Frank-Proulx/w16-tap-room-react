import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number
};

export default Keg;
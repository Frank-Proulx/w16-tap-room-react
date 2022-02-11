import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  const kegStyle = {
    border: '0.5vw ridge white',
    width: '25vw',
  }
  const buttonStyle = {
    width: '24vw',
    marginTop: '0'
  }
  const pStyle = {
    marginBottom: '0'
  }
  let checkPints;
  if (props.pintsRemaining < 1) {
    checkPints = <p>"Sold out"</p>
  } else {
    checkPints = <button style={buttonStyle} onClick={() => props.onReducingPints(props.index)}>Sell a pint</button>;
  }
  return (
    <React.Fragment>
      <div style={kegStyle}>
        <div onClick = {() => props.whenKegClicked(props.id)}>
          <h3>Beer Name: {props.name}</h3>
          <p>Brand: {props.brand}</p>
          <p>Price: ${props.price}</p>
          <p>Alcohol Content: {props.alcoholContent}%</p>
          <p style={pStyle}>Pints Remaining: {props.pintsRemaining}</p>
        </div>
        {checkPints}
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
  whenKegClicked: PropTypes.func,
  onReducingPints: PropTypes.func,
  index: PropTypes.number
};

export default Keg;
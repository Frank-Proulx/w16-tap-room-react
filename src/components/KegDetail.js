import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  const kegStyle = {
    border: '0.5vw ridge white',
    width: '25vw',
  }

  return (
    <React.Fragment>
      <div style={kegStyle}>
      <h1>Keg Detail</h1>
      <h3>Beer Name: {keg.name}</h3>
      <p>Brand: {keg.brand}</p>
      <p>Price: ${keg.price}</p>
      <p>Alcohol Content: {keg.alcoholContent}%</p>
      <p>Pints Remaining: {keg.pintsRemaining}</p>
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
};

export default KegDetail;
import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      {props.kegList.map((keg, index) =>
        <Keg
        whenKegClicked = {props.onKegSelection}
        onReducingPints = {props.onReducingPintsRemaining}
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        pintsRemaining={keg.pintsRemaining}
        id={keg.id}
        key={keg.id}
        index={index} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onReducingPintsRemaining: PropTypes.func
};

export default KegList;
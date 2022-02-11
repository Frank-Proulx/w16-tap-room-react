import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name}</h3>
      <p>{keg.brand}</p>
      <p>{keg.price}</p>
      <p>{keg.alcoholContent}</p>
      <p>{keg.pintsRemaining}</p>
      {/* <button onClick={ props.onClickingEdit }>Update Keg</button> */}
      {/* <button onClick={()=> onClickingDelete(keg.id) }>Delete keg</button> */}
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  // onClickingDelete: PropTypes.func,
  // onClickingEdit: PropTypes.func
};

export default KegDetail;
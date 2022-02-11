import React from "react";
import beertaps from "./../img/beertaps.jpg";

function Header(){
  const headerImgStyles = {
    width: '20vw',
    height: 'auto',
    margin: '0 auto',
    float: 'right'
  }

  const headerTextStyles = {
    textAlign: 'center'
  }

  return(
    <React.Fragment>
      <div>
        <img style={headerImgStyles} src={beertaps} alt="a group of beer taps"/>
        <h1 style={headerTextStyles}>Tap Room Inventory</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;
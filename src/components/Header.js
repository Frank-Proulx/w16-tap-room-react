import React from "react";
import beertaps from "./../img/beertaps2.jpg";

function Header(){
  const headerImgStyles = {
    width: '35vw',
    height: 'auto',
    float: 'right'
  }

  const headerTextStyles = {
    textAlign: 'center',
    fontSize: '60px'
  }

  return(
    <React.Fragment>
      <div>
        <h1 style={headerTextStyles}>Tap Room Inventory</h1>
        <hr/>
        <img style={headerImgStyles} src={beertaps} alt="a group of beer taps"/>
      </div>
    </React.Fragment>
  );
}

export default Header;
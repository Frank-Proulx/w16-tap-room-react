import React from "react";
import beertaps from "./../img/beertaps.jpg";

function Header(){
  const headerImgStyles = {
    width: '30vw',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }
  return(
    <React.Fragment>
      <div>
        <img style={headerImgStyles} src={beertaps} alt="a group of beer taps"/>
        <h1>Tap Room Inventory</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;
import React, { Component } from 'react';
import './css/Header.css';

import bc from './bc.png';

var style = {
  backgroundColor: "rgb(105, 1, 59)",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  top: "0",
  height: "60px",
  width: "100%",
};



class Header extends Component {
  render() {

    return (

      <div style={style}>

  {this.props.children}
  <img src={bc} className="App-bc" alt="bc" />

       <p>PRIIMA</p> 


          


      </div>
    );
  }
}

export default Header;

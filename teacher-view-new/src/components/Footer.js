import React, { Component } from 'react';


var style = {
  backgroundColor: "rgb(105, 1, 59)",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};



class Footer extends Component {
  render() {

    return (
      <div style={style}>
      {this.props.children}
  </div>



    );
  }
}

export default Footer;

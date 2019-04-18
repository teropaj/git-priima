import React, { Component } from 'react';
import './css/Swipe.css'
//import './App.css';
import ReactSwipe from 'react-swipe';

 


class Swipe extends Component {
  render() {
    let reactSwipeEl;
    return (
      <div className="App"  style={{textAlign: 'left'}}>
        <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        { this.props.panes.map((student,index)=>
          <div key={index} className="carousel">{student}</div>
        
        )} 
 
      </ReactSwipe>
      <button style={{float: 'right'}} onClick={() => reactSwipeEl.next()}>Next</button>
      <button style={{float: 'left'}}onClick={() => reactSwipeEl.prev()}>Previous</button>
      </div>
    );
  }
}

export default Swipe;

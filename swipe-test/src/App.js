import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSwipe from 'react-swipe';

const Carousel = () => {
  let reactSwipeEl;

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div id="pane1"  >PANE 1</div>
        <div id="pane2">PANE 2</div>
        <div id="pane3">PANE 3</div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};


class App extends Component {
  render() {
    return (
      <div className="App">
         
        <Carousel/>  
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './css/Swipe.css'
//import './App.css';
import ReactSwipe from 'react-swipe';

 


class Swipe extends Component {

  componentDidMount(){
    setTimeout(()=>
    document.getElementById('swipe').style.display='none',2000)
  }


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
          <div key={index} className="carousel"><h1>{student}</h1>
          <h1 id="swipe" style={{textAlign:'center'}}>Swipe</h1>
          </div>
          
        )} 
 
        </ReactSwipe>
        <div style={{display: 'table',width:'100%'}}> 
          <button style={{display: 'table-cell',float:'left'}} onClick={() => reactSwipeEl.next()}>Next</button>
          <p style={{display: 'table-cell',textAlign:'center'}}>Swipe</p>   
          <button style={{display: 'table-cellt',float:'right'}}onClick={() => reactSwipeEl.prev()}>Previous</button>
        </div>
      </div>
    );
  }
}

export default Swipe;

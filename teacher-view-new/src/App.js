'use strict'


import React, { Component } from 'react';
 
import './App.css';
import Search from './components/Search'
import { strict } from 'assert';
import postData from './components/teacherViewJson.json'
 

class App extends Component {


componentDidMount(){
  console.log(postData)
} 




  
  render() {
     




    return (
      <div className="App">
         
        <Search/>
           
         
         
         

      </div>
    );
  }
}

export default App;
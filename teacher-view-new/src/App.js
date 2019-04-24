 


import React, { Component } from 'react';
 
import './App.css';
import Search from './components/Search'
import Footer from './components/Footer'
import Header from './components/Header'
import postData from './components/teacherViewJson.json'
 

class App extends Component {


componentDidMount(){
  console.log(postData)
} 




  
  render() {
     




    return (
      <div className="App">
        <Header/> 

        <Search/>
           
         
        <Footer/>
         

      </div>
    );
  }
}

export default App;
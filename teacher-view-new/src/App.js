 


import React, { Component } from 'react';
 
import './App.css';
import Search from './components/Search'
import Footer from './components/Footer'
import Header from './components/Header'
import TeacherLoggedIn from './components/TeacherLoggedIn'
import jsonFile from './components/teacherViewJson.json'
//import jsonTest from './components/jsonTest.json' 

class App extends Component {

  constructor(props) {
    super(props);
    this.component=1
    //this.jsonParsed= this.jsonParsed=JSON.parse('{"joo":"jee"}');
     //this.jsonParsed=JSON.parse(jsonTest)
  }

componentDidMount(){
   //this.jsonParsed=JSON.parse(jsonFile);
  // console.log(this.jsonParsed)
   //console.log(this.jsonParsed)
   //console.log('jsontest ',jsonTest.joo)
  
} 
groups(data){
  let groups=[],string=""
  let lenght=Object.getOwnPropertyNames(jsonFile.groupList).length
  for (let i=0;i<lenght-1;i++){
    let help=data.groupList[i].groupId
    console.dir(i+' '+help)
    groups.push(help)
    string+=help

  
  }
  let value=groups.toString
  console.log('list ',typeof (value),' ',groups)
  return string
}


  
   
  render() {
     




    return (
      <div className="App">
        <Header/> 

        {(this.component===1) ? 
            <Search/> : 
            <TeacherLoggedIn 
              groups=
                {[1,2,3,4]}/>}
              <p>json {this.groups(jsonFile)}</p>
         
         
        <Footer/>
         

      </div>
    );
  }
}

export default App;
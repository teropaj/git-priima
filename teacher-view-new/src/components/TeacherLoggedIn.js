import React, { Component } from 'react';
import './css/Header.css'
const jsonFile = require('jsonfile')
const fileName = './teacherViewJson.json'

 

 


class TeacherLoggedIn extends Component {
   
  componentDidMount(){
    //const jsonFile = require('jsonfile')
    //const fileName = './teacherViewJson.json'

    const jsonData = jsonFile.readFileSync(fileName);

    jsonData = jsonFile.readFileSync(fileName);

    let lenght=Object.getOwnPropertyNames(jsonData.groupList).length
    for (let i=0;i<lenght-1;i++){
      console.dir(i+' '+jsonData.groupList[i].groupId)
    }


    





     }
  

  useXMLHttpRequest(){    //works only on server
    console.log('Teacher')
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
        console.log('Teacher')
      }
    };
    xhttp.open("GET", "./teacherViewJson.json", true);
    xhttp.send();
  }
  
  render() {
     
    return (
      <div className="header" >
          
         <ul> 
          {this.props.groups.map((group,index)=>
           <li key={index}>{group}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default TeacherLoggedIn;

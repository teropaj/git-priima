import React, { Component } from 'react';
import './css/TeacherLoggedIn.css'
const jsonFile = require('jsonfile')
const fileName = './teacherViewJson.json'

 

 


class TeacherLoggedIn extends Component {
   
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }
  
  
  
  componentDidMount(){
    //const jsonFile = require('jsonfile')
    //const fileName = './teacherViewJson.json'

    // const jsonData = jsonFile.readFileSync(fileName);

    // jsonData = jsonFile.readFileSync(fileName);

    // let lenght=Object.getOwnPropertyNames(jsonData.groupList).length
    // for (let i=0;i<lenght-1;i++){
    //   console.dir(i+' '+jsonData.groupList[i].groupId)
    }


    





      
  

  functioinuseXMLHttpRequest(){    //works only on server
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
  handleClick(e) {console.log(e)
    this.props.component(e.target.id)
    this.props.headerFooterOff(false)}

  
  
  render() {
     
    return (
      <div className="TeacherHeight" >
          
         <ul className="listType"> 
          {this.props.groups.map((group,index)=>
           <li 
              key={index} >
               
           <button style={{fontSize: '5vh'}} onClick={this.handleClick}
                  //{this.props.component(index)}
                  id={index} 
                  >{group}</button>
           </li>
          )}
        </ul>
      </div>
    );
  }
}

export default TeacherLoggedIn;

import React, { Component } from 'react';
import './css/TeacherLoggedIn.css'
// const jsonFile = require('jsonfile')
// const fileName = './teacherViewJson.json'
import ListStudents from './ListStudents'
import SearchStudents from './SearchStudents.js'
 
 
 

 


class TeacherLoggedIn extends Component {
   
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)

    this.state={students:this.props.students,
                searchList:"",
                validStudents:this.props.students}
    this.showSearchList=false
    this.showStudents=this.showStudents.bind(this)
    this.makeListOfNamesOfStudents=this.makeListOfNamesOfStudents.bind(this)
    this.callbackStudentSearch=this.callbackStudentSearch.bind(this)
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
    showStudents(studs,group){
      let studentListHelper = []
       
      for (let i in studs) {
        console.log('group ',group,'i.group ',studs[i].group)
        if (studs[i].group===group) {studentListHelper.push(studs[i])}
        }
      this.setState({searchList: studentListHelper})
      this.setState({validStudents:studentListHelper})
      console.log(this.state.searchList)
      this.showSearchList=true
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
  handleClick(e) {console.log(e.target.id)
    // this.props.component(e.target.id)
    // this.props.headerFooterOff(false)}
    this.showStudents(this.props.students, e.target.id)
    let studentsOfGroup= []

    // for (let i in this.state.students){ 
    //   console.log('i group ',this.state.students[i].group,e.target.id)
    //   if (this.state.students[i].group===e.target.group) 
    //   console.log('i.group ',i.group,'   ',e.target.ip)
    //   studentsOfGroup.push(i)
    // }
    // //console.log('studentsOfGroup ',studentsOfGroup)
    // this.setState({validStudents:studentsOfGroup})
  }
  makeListOfNamesOfStudents(){
    let names=[]
    for (let i in this.props.students){
      names.push(i.name)
    }
    return names
  }
  callbackStudentSearch(b){
    console.log(b)
    this.setState({searchList: b})
  }
  
  render() {
     
    return (
      <div className="TeacherHeight" >
          
       


         <ul className="listType flex-container"> 
          {this.props.groups.map((group,index)=>
           <li 
              key={index} >
               
           <button style={{fontSize: '5vh'}} onClick={this.handleClick}
                  //{this.props.component(index)}
                  id={group} 
                  >{group}</button>
           </li>
          )}
        </ul>
        <SearchStudents students={this.makeListOfNamesOfStudents}
                          callback={this.callbackStudentSearch}/>



        {(this.showSearchList===true) ? 
          <ListStudents searchList={this.state.searchList}/> :
          ""
        }
        
      </div>
    );
  }
}

export default TeacherLoggedIn;

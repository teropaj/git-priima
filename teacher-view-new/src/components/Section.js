import React, { Component } from 'react';
import './css/TeacherLoggedIn.css'
// const jsonFile = require('jsonfile')
// const fileName = './teacherViewJson.json'
import ListStudents from './ListStudents'
import SearchStudents from './SearchStudents.js'
import GroupButtons from './GroupButtons.js'
import GroupSwipe from './GroupSwipe.js'
 
 
 

 


class TeacherLoggedIn extends Component {
   
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)

    this.state={students:this.props.students,
                searchList:"",
                validStudents:this.props.students,
                groups:this.props.groups,
                validGroups:0}
    this.showSearchList=false
    this.showStudents=this.showStudents.bind(this)
    this.makeListOfNamesOfStudents=this.makeListOfNamesOfStudents.bind(this)
    this.callbackStudentSearch=this.callbackStudentSearch.bind(this)
    this.callbackChangeShowSearchListVar=this.callbackChangeShowSearchListVar.bind(this)
    this.toSearch=""
  }
  
  
  
  componentDidMount(){
    //const jsonFile = require('jsonfile')
    //const fileName = './teacherViewJson.json'

    // const jsonData = jsonFile.readFileSync(fileName);

    // jsonData = jsonFile.readFileSync(fileName);

    // let lenght=Object.getOwnPropertyNames(jsonData.groupList).length
    // for (let i=0;i<lenght-1;i++){
    //   console.dir(i+' '+jsonData.groupList[i].groupId)
     
    console.log(this.state.groups)
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
       
      console.log(group)
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
    let helper=[]
    console.clear()
    
    //debugger
    console.log(e.target)
    //debugger
    this.showStudents(this.props.students, e.target.id)
    this.props.ChangeGroupList(e.target.id)
     
    helper.push(e.target.id)
    console.log('handleclick ',this.state.groups)
    this.setState({groups:helper})
    let groupId=this.state.groups.findIndex(value=>value===e.target.id)
    console.clear()
    
    console.log(groupId)
    
    this.setState({validGroups:groupId})

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
    for (let i in this.state.validStudents){
      console.log(i.name)
      names.push(this.state.validStudents[i])
    }
     
    
    return names
  }
  callbackStudentSearch(b){  
    console.log(b)
     
    this.setState({searchList: b})  //refresh studentList
  }
  valid(){for (let i in this.state.validStudents){
    console.log(this.state.validStudents[i])
  }
  
  }

  callbackChangeShowSearchListVar () {this.showSearchList=true}
   
   
   
  render() {
     
    return (
       
       
      <div className="TeacherHeight" >

      {/* {<GroupSwipe groups= {this.state.groups}
                  handleClick = {this.handleClick}/>  */}
    
       <GroupButtons groups= {this.state.groups}
                     validGroups={this.state.validGroups}
                    handleClick = {this.handleClick}/>
                      
    

           
         
        <SearchStudents students={this.state.validStudents}
                          callback={this.callbackStudentSearch}
                          callbackChangeShowSearchListVar={this.callbackChangeShowSearchListVar}
                          />



        {(this.showSearchList===true) ? 
          <ListStudents searchList={this.state.searchList}
          callbackStudentSearch={this.callbackStudentSearch}

                  /> :
          ""
        }
        
        
      </div>
    );
  }
}

export default TeacherLoggedIn;

 


import React, { Component } from 'react';
 
import './App.css';
import Search from './components/Search'
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'
import jsonFile from './components/teacherViewJson.json'
 
//import jsonTest from './components/jsonTest.json' 

class App extends Component {

  constructor(props) {
    super(props);
    this.state={component:2,
                groupList:this.groups(jsonFile)}  //all groups
    this.numberOfGroup=0
    this.component=2  //1=Search component else Teacher logged in
    //this.jsonParsed= this.jsonParsed=JSON.parse('{"joo":"jee"}');
     //this.jsonParsed=JSON.parse(jsonTest)
    this.footerComponentOn=this.headerComponentOn=true
     this.callback=this.callback.bind(this)
     this.HeaderFooterTurnOff=this.HeaderFooterTurnOff.bind(this)
     this.ChangeGroupList=this.ChangeGroupList.bind(this)
     this.ListAllStudents=this.ListAllStudents.bind(this)
      
  }
   

componentDidMount(){
   //this.jsonParsed=JSON.parse(jsonFile);
  // console.log(this.jsonParsed)
   //console.log(this.jsonParsed)
   //console.log('jsontest ',jsonTest.joo)
   //this.ListNamesOfGroup(0)
   this.ListAllStudents()
    
  
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
  return groups
}

  callback=(dataFromChild)=> {this.setState({component:(this.state.component===1) ? 2:1})
              console.log(dataFromChild)  
              this.numberOfGroup=dataFromChild
  }

  ListNamesOfGroup(groupNumber){
    let students=[]
    let lenght=Object.getOwnPropertyNames(jsonFile.groupList[groupNumber].studentList).length
    for (let i=0;i<lenght-1;i++){
      let student=jsonFile.groupList[groupNumber].studentList[i]
      let name=student.name
      let id=student.id
      let status=student.status

      //console.dir(i+' '+name)
      students.push( [name,id,status])

    }
    return students

  }
   
   ListAllStudents(data){
     
  let students=[]
  let lenght=Object.getOwnPropertyNames(jsonFile.groupList).length
  for (let i=0;i<lenght-1;i++){
     
     
     
    //groups.push(help)
    //students[i]=[]
    
    let amoutOfStudentGroup=jsonFile.groupList[i].studentList.length
    
    for (let student=0;student<amoutOfStudentGroup-1;student++){
      let helper=jsonFile.groupList[i].studentList[student]
      let helperGroup=jsonFile.groupList[i].groupId
      students.push({ group:helperGroup,
                        name:helper.name,
                        id:helper.Id,
                        status:helper.status,
                      })
                      
      //console.log(student,i,students[i][student])
      
    }


  
  }
    
   return students
   }








  HeaderFooterTurnOff(onOff) {
    this.headerComponentOn=this.footerComponentOn=onOff
  }

  ChangeGroupList(group){
    this.groupList=[]
    this.groupList.push(group)
     
    console.log(this.groupList)
    this.setState({groups:group})
  }



  
   
  render() {
     




    return (
      <div className="App">

        
        {(this.headerComponentOn===true) ? <Header/>:""} 

        
            <Section
              groups=
                {this.state.groupList}  //all groups
              component=
                {this.callback}
                
              headerFooterOff={this.HeaderFooterTurnOff}
              
              students={this.ListAllStudents(jsonFile)} 

              ChangeGroupList={this.ChangeGroupList}/>
        
               
         
         
               {(this.headerComponentOn===true) ? <Footer/>:""}
              
              
      </div>
    );
  }
}

export default App;
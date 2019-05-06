import React, { Component } from 'react'
import './css/TeacherLoggedIn.css'

  
  function BrowseButton (props) {
    return <h1> &#8658;</h1>
  }
 
  class GroupButton extends Component {


     

   render() {
     return (
       <div>
         {(this.props.onlyOneGroup===true) ? 
         <BrowseButton/>   : ""}
         <button style={{fontSize: '5vh'}} onClick={this.props.handleClick}
                //{this.props.component(index)}
                id={this.props.id} 
                key={this.props.key}
                >{this.props.group}</button> 
                
         

       </div>
     )
   }
 }
 



export default class groupButtons extends Component {
  
   
  constructor(props){
    super(props)
  
    this.handleClick=this.handleClick.bind(this)
  
  
  
  }

  componentDidMount (){
    debugger
    console.log(this.props.groups)
  }

  handleClick(e) {console.log(e.target.id)
    // this.props.component(e.target.id)
    // this.props.headerFooterOff(false)}
    let helper=[]

    this.showStudents(this.props.students, e.target.id)
    this.props.ChangeGroupList(e.target.id)
    debugger
    helper.push(e.target.id)
    console.log('handleclick ',this.state.groups)
    this.setState({groups:helper})

    // for (let i in this.state.students){ 
    //   console.log('i group ',this.state.students[i].group,e.target.id)
    //   if (this.state.students[i].group===e.target.group) 
    //   console.log('i.group ',i.group,'   ',e.target.ip)
    //   studentsOfGroup.push(i)
    // }
    // //console.log('studentsOfGroup ',studentsOfGroup)
    // this.setState({validStudents:studentsOfGroup})
  }

   
  
  
  
  
  render() {
     



    return (

      <div>
         { /*<ul className="listType flex-container"   > 
          {this.props.groups.map((group,index)=>
           <li style={{margin:'auto'}}
              key={index} >
               
           <button style={{fontSize: '5vh'}} onClick={this.props.handleClick}
                  //{this.props.component(index)}
                  id={group} 
                  key={index}h
                  >{group}</button>
           </li>
          )*
        </ul>*/}

        <ul className="listType flex-container"   > 
          {this.props.groups.map((group,index)=>
           <li style={{margin:'auto'}}
              key={index}a >
               

            {(this.props.groups.length===1) ?
            <GroupButton handleClick={this.props.handleClick}
                         group={group}
                         id={group}b
                         key={index}d
                         onlyOneGroup={true}/>
                           :
            <GroupButton handleClick={this.props.handleClick}
                         group={group}
                         key={group}c
                         id={group}/>
            }


            


           </li>
          )}
        </ul>
        
      </div>
    )
  }
}

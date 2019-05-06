import React, { Component } from 'react'
import './css/TeacherLoggedIn.css'

  
 
  class GroupButtons extends Component {
   render() {
     return (
       <div>
         <button style={{fontSize: '5vh'}} onClick={this.props.handleClick}
                //{this.props.component(index)}
                id={this.props.idgroup} 
                >{this.props.group}</button>
}
       </div>
     )
   }
 }
 



export default class groupButton extends Component {
  
   
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
          <ul className="listType flex-container"   > 
          {this.props.groups.map((group,index)=>
           <li style={{margin:'auto'}}
              key={index} >
               
           <button style={{fontSize: '5vh'}} onClick={this.props.handleClick}
                  //{this.props.component(index)}
                  id={group} 
                  >{group}</button>
           </li>
          )}
        </ul>

        <ul className="listType flex-container"   > 
          {this.props.groups.map((group,index)=>
           <li style={{margin:'auto'}}
              key={index}a >
               

            {(this.props.groups.length===1) ?
            <groupButtons handleClick={this.props.handleClick}
                         group={group}
                         id={group}b/>
                           :
            <groupButtons handleClick={this.props.handleClick}
                         group={group}
                         key={group}c/>
            }


            


           </li>
          )}
        </ul>
        
      </div>
    )
  }
}

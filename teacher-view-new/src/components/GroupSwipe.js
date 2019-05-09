import React, { Component } from 'react'
import './css/TeacherLoggedIn.css'
import ReactSwipe from 'react-swipe';

   
function BrowseButton (props) {
  return (props.side==='left') ?  
  <h1 style={{display:'inline'}}> &#8656;</h1> :
  <h1 style={{display:'inline'}}> &#8658;</h1>
}




export default class GroupSwipe extends Component {
  
   
  constructor(props){
    super(props)
  
    this.handleClick=this.handleClick.bind(this)
  
  
  
  }

  componentDidMount (){
    
    console.log(this.props.groups)
  }

  handleClick(e) {console.log(e.target.id)
    // this.props.component(e.target.id)
    // this.props.headerFooterOff(false)}
    let helper=[]

    this.showStudents(this.props.students, e.target.id)
    this.props.ChangeGroupList(e.target.id)
    
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
     
    let reactSwipeEl;


    return (

      <div>
        
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >
         

        {this.props.groups.map((group,index)=>
        <div key={index} id={group}>
          <BrowseButton side="left"/>   : ""}
          <button key={index}
                  id={group}
                  onClick={this.props.handleClick} >
                  {group}
          </button>
          <BrowseButton side="right"/>   : ""}
        </div>
      )
      }







         
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>


        
  
  
  
  
  
  
       
    )
  }
}

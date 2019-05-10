import React, { Component } from 'react'
import { Link, DirectLink, Element, Events, scrollSpy, scroller } from 'react-scroll'
import './css/search.css';
import sortByName from './functions/sortByName'
import sortByGrade from './functions/sortByGrade'

export default class ListStudents extends Component {
  constructor(props){
    super(props)
    this.state= {searchList:this.props.searchList
    }
    this.clickSortByGrade=this.clickSortByGrade.bind(this)

    this.clickSortByName=this.clickSortByName.bind(this)
    this.getHeight=this.getHeight.bind(this)
    this.state={scrollLength:this.props.scrollLength}
    this.scrollHeight=this.props.scrollHeight
    this.heigt=0


  }
  componenDidMount(){
    if (document.getElementById('scroll-container')!=undefined) {
    document.getElementById('scroll-container').style.height='25vh'}
    console.clear()
    debugger
    console.log('scrollLength ',this.props.scrollLength)
    this.props.headerFooterOff(false)}

  componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
        
      console.clear()
      let a=document.getElementById('scroll-container').style.height
      console.log(' a',a,' prevprops',prevProps)
      //if (a!=this.props.scrollLength) a=this.props.scrollLength
      //a='10vh'
      //console.log('height ',a,'  props ',this.props)
      if(prevProps.scrollLenght===1) a='70vh'
      console.log('height',a,' height ',a,'  props ',this.props)
       
    }
  
  

  clickSortByName(e) {
     
    //console.log('state ',this.state.orderByScore)
    console.log(e) 
    //console.log('before ',this.state.students)
     let searchListHelper=sortByName(this.state.searchList);
     //debugger
     console.log('after ',searchListHelper)
     //this.setState({students:searchListHelper})
     this.props.callbackStudentSearch(searchListHelper)
// }
  
  
  }
  clickSortByGrade(e){
    //debugger
    let searchListHelper=sortByGrade(this.props.searchList);
    console.log(searchListHelper)
    //this.setState({students: searchListHelper})}
    this.props.callbackStudentSearch(searchListHelper)
  }


  //with SearchStudent component
  callbackStudentSearch(b){
    //this.setState({searchList: b})
  }
  getHeight(){
    // if (document.getElementById('scroll-container')!==null) {
    //    let a=document.getElementById('scroll-container') 
    //    if(this.props.scrollLength===1) a.style.height='70vh'
    //    else a.style.height='25vh'
        
    //   console.log(a)
    //   return a
 // }
}



  render() {
    return (
      <div>
         
        <div style=   {{width:'30%',display:'inline'}} > 
           
                 
                  <h3 style={{  display:'inline' }}
                    onClick={ this.clickSortByName}
                    >Student ↓</h3>
                  
                   
                  
                  <h3 style={{ display:'inline' }}
                  onClick={ this.clickSortByGrade}
                  >Score ↓</h3>
                  
                
          </div>
          <Element className="element" id="scroll-container" style={{
                    position: 'relative',
                    height: '25vh',
                    width: '100%',
                    overflow: 'scroll',
                    margin: 'auto'
                    //marginBottom: '50px',
                    //backgroundColor: 'yellow'
                    
                    }}> 

          <table className='fontSize' >
               <tbody> 

                
                {this.props.searchList.map((student,index)=>
                     
                     <tr key={index}a>
                      <td key={index} style={{float:'left'}}>{student.name}   </td>
                      <td style={{textAlign: 'right'}}>{student.status}</td>
                      <td>{this.getHeight()
                      } </td>
                   </tr>
                    
                )
              }
               
              </tbody>


               

              </table>
              
              </Element>

         
      </div>
    )
  }
}

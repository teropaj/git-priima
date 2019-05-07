import React, { Component } from 'react'
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



  render() {
    return (
      <div>
          <table className='fontSize' >
              <thead> 
                <tr>
                  <th
                    onClick={ this.clickSortByName}
                    >Student ↓</th>
                  
                  
                  
                  <th 
                  onClick={ this.clickSortByGrade}
                  >Score ↓</th>
                </tr>
              </thead>
               <tbody> 

                {this.props.searchList.map((student,index)=>
                     <tr key={index}a>
                      <td key={index}>{student.name}   </td>
                      <td style={{textAlign: 'center'}}>{student.status}</td>
                   </tr>
                )
              }
              </tbody>


               

              </table>

        
      </div>
    )
  }
}

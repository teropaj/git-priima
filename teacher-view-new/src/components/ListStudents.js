import React, { Component } from 'react'
import './css/search.css';
import sortByName from './functions/sortByName'
import sortByGrade from './functions/sortByGrade'

export default class ListStudents extends Component {
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
                      <td key={index}>{student[0]}   </td>
                      <td style={{textAlign: 'center'}}>{student[2]}</td>
                   </tr>
                )
              }
              </tbody>


               

              </table>

        
      </div>
    )
  }
}

import React, {Component} from 'react';
import sortByName from './functions/sortByName'
import sortByGrade from './functions/sortByGrade'
import Swipe from './Swipe'
import SearchStudents from './SearchStudents.js'
 
import './css/search.css';

class Search extends  Component  {

  constructor(props) {
    super(props);
    this.orderByScore=true
    this.students= [ 
                    ['Billy',12],
                    ['Cristina',7],
                    ['Adele',6],
                    ['Alana',20]
  ]

  //sortByName(this.students)   //sort students
    this.state = {orderByScore: false,
                 students:  this.props.listOfStudents,
                 searchList: this.props.listOfStudents

                          };

     
    this.clickSortByName = this.clickSortByName.bind(this);
    this.clickSortByGrade = this.clickSortByGrade.bind(this);
    this.callbackStudentSearch = this.callbackStudentSearch.bind(this)
     
  }
  componentDidMount(){console.log('test '+this.props.listOfStudents)}

  

    

 
  clickSortByName(e) {
     
    console.log('state ',this.state.orderByScore)
    console.log(e) 
    console.log('before ',this.state.students)
     let searchListHelper=sortByName(this.state.searchList);
     console.log('after ',searchListHelper)
     this.setState({students:searchListHelper})
// }
  
  
  }
  clickSortByGrade(e){
    let searchListHelper=sortByGrade(this.state.searchList);
    this.setState({students: searchListHelper})}


  //with SearchStudent component
  callbackStudentSearch(b){
    this.setState({searchList: b})
  }
  
  render() {

//     sortByScore() {this.searchListHelper=sort(this.searchListHelper,'Score');
//     setState(student:{this.searchListHelper})
// }
     


    console.table('render '+this.state.searchList)

    return (
      <div className="SearchHeight" >
         
           
           
         <div className="fontSize">
           
        </div>
              <SearchStudents students={this.state.students}
                          callback={this.callbackStudentSearch}
              />
              <Swipe panes={this.state.searchList}/>

          
             
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

                {this.state.searchList.map((student,index)=>
                     <tr key={index}a>
                      <td key={index}>{student[0]}   </td>
                      <td style={{textAlign: 'center'}}>{student[2]}</td>
                   </tr>
                )
              }
              </tbody>


               

              </table>
                
          
         
           
      </div>
    );
  }
}

export default Search;

import React, {Component} from 'react';
import sortByName from './functions/sortByName'
import sortByGrade from './functions/sortByGrade'
import Swipe from './Swipe'
import SearchStudents from './SearchStudents.js'
import ListStudents from './ListStudents'
 
import './css/search.css';

class Search extends  Component  {

  constructor(props) {
    super(props);
    this.orderByScore=true
     

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
               
              
              <Swipe panes={this.state.searchList}/>

              <SearchStudents students={this.state.students}
                          callback={this.callbackStudentSearch}/>

          
             <ListStudents searchList={this.state.searchList}/>

               
          
         
           
      </div>
    );
  }
}

export default Search;

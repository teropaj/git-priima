import React, {Component} from 'react';
import sortByName from './functions/sortByName'
import sortByGrade from './functions/sortByGrade'
import Swipe from './Swipe'
 
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
                 students:  this.students,
                 searchList: this.students 

                          };

    this.myFunction = this.myFunction.bind(this);
    this.clickSortByName = this.clickSortByName.bind(this);
    this.clickSortByGrade = this.clickSortByGrade.bind(this);
     
  }

  

    


  myFunction() {
     
    console.log(this.search.value);
    // Declare variables
     var input, filter, ul, li, a, i, txtValue;
     input = this.search.value;
     filter = input.toUpperCase();
     ul = document.getElementById("myUL");
    //  li = ul.getElementsByTagName('td');
    //  console.log(li[0].getElementsByTagName("li"))
     let searchListHelper=[]
    console.log(this.state.students)
    //Loop through all list items 
     for (i = 0; i < this.state.students.length; i++) {
      let student=this.state.students[i]
      console.log(student,filter,
      student[0].toLocaleUpperCase().indexOf(filter))

      if (student[0].toLocaleUpperCase().indexOf(filter)>-1) searchListHelper.push(student)
      // console.log(a)
      // txtValue = a.textContent || a.innerText;
      // if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //    li[i].style.display = "";
      // } else {
      //    li[i].style.display = "none";
      //   }
    }
    this.setState({searchList:searchListHelper})
  }
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
  
  render() {

//     sortByScore() {this.searchListHelper=sort(this.searchListHelper,'Score');
//     setState(student:{this.searchListHelper})
// }
     




    return (
      <div className="SearchHeight" >
         
           
           
         <div className="fontSize">
           
        </div>
              <Swipe panes={this.state.searchList}/>

          
            
              <input type="text" id="myInput" style={{fontSize: '2vh'}}
          ref={input => this.search = input}
          onChange={this.myFunction} placeholder="Search for names.."/>
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
                      <td style={{textAlign: 'center'}}>{student[1]}</td>
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

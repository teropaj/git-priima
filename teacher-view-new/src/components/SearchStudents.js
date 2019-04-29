import React, { Component } from 'react'

export default class SearchStudents extends Component {


  constructor(props) {
    super(props);
    this.myFunction=this.myFunction.bind(this)
    this.state={students:this.props.students}
  }
    

    myFunction(e) {
        console.log('nimi ',e)
        console.log('e from myFunction '+e) 
         
        //console.log('from myFunction '+this.search.value);
        // Declare variables
         var input, filter, ul, li, a, i, txtValue;
         input = document.getElementById('myInput').value  //input user writes
         filter = input.toLocaleUpperCase();
         
         let searchListHelper=[]
//        console.log(this.state.students)
        //Loop through all list items 
          let students=this.state.students
          let lenghtOfObject= function(students) {
            var size = 0, key;
            for (key in students) {
                if (students.hasOwnProperty(key)) size++;
            }
            return size;
        };
          let lenght=lenghtOfObject(this.state.students)
          console.log('lenght ',lenght)
         for (let i = 0; i < lenght; i++) {
          let student=this.props.students[i]
          //console.log('student ***'+student+' '+i)
          console.log(`studet ${student}, filter ${filter} ,
          ${student[0].toLocaleUpperCase().indexOf(filter)}`)
    
          if (student[0].toLocaleUpperCase().indexOf(filter)>-1) {searchListHelper.push(student)
            console.log('HELPER '+searchListHelper)}
          // console.log(a)
          // txtValue = a.textContent || a.innerText;
          // if (txtValue.toUpperCase().indexOf(filter) > -1) {
          //    li[i].style.display = "";
          // } else {
          //    li[i].style.display = "none";
          //   }
        }
        //console.log('SEARCHLIST '+this.state.searchList)
        console.log('searchlisthelper ',searchListHelper)
        this.props.callback(searchListHelper)
      }
        

  render() {
    return (
      <div>
        <input type="text" id="myInput" style={{fontSize: '3vh'}}
          ref={input => this.search = input}
          name={this.nimi}
          onChange={this.myFunction} placeholder="Search for names.."/>
      </div>
    )
  }
}

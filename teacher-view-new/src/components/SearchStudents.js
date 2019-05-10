import React, { Component } from 'react'

export default class SearchStudents extends Component {


  constructor(props) {
    super(props);
    this.myFunction=this.myFunction.bind(this)
    
  }
  componentDidMount(){//this.props.headerFooterOff(false)
  }
    

    myFunction(e) {
         
        console.log('nimi ',e)
        console.log('e from myFunction '+e) 
         
        //console.log('from myFunction '+this.search.value);
        // Declare variables
         var input, filter 
         input = document.getElementById('myInput').value  //input user writes
         filter = input.toLocaleUpperCase();
         
         console.log(filter)
         let searchListHelper=[]
//        console.log(this.state.students)
        //Loop through all list items 
          let students=this.props.students
          console.log(students)
          
          let lenghtOfObject= function(students) {
            var size = 0, key;
            for (key in students) {
                if (students.hasOwnProperty(key)) size++;
            }
            return size;
        };
          let lenght=lenghtOfObject(this.props.students)
          console.log(students)
          //console.log('35 lenght ',lenght)
         for (let i = 0; i < lenght; i++) {
          let student=this.props.students[i]
          //console.log('student ***'+student+' '+i)
          //  console.log(`student ${student.name}, filter ${filter} ,
          // ${student.name.toLocaleUpperCase().indexOf(filter)}`)
    
          if (student.name.toLocaleUpperCase().indexOf(filter)>-1) {searchListHelper.push(student)
            console.log(`student ${student.name}, filter ${filter} ,
            ${student.name.toLocaleUpperCase().indexOf(filter)} i=${i}`)
            this.props.callbackChangeShowSearchListVar()
              }

          // let idHelper=String.student.id
          // console.clear()
          // debugger
          // console.log(student.id,filter)
          // debugger
          // //student-id
          // if( idHelper.indexOf(filter)>-1){searchListHelper.push(student)
          
          // }
          
            //console.log('HELPER '+searchListHelper)
            
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
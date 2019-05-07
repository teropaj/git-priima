export default function sort(array ) {

     
     
    
   array.sort(function(a, b) {

     

        
             console.log('was here')
             debugger
             var nameA = a.name.toUpperCase(); // ignore upper and lowercase
             var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  
   
    debugger
    console.log('names ',nameA,nameB)

   if (nameA < nameB) {
     return -1;
   }
   if (nameA > nameB) {
     return 1;
   }
   
   // names must be equal
   return 0;
   
   
   });
   return array
   }

   //console.log(sort(['c','b','a']))

   

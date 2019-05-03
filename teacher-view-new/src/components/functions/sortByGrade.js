export default function sortByGrade (array) {

     console.log('was here')
     
    
   array.sort(function(a, b) {


      console.log(a,b)

     

        let nameA,nameB
       
             nameA = a.status; // ignore upper and lowercase
             nameB = b.status; // ignore upper and lowercase
       
        
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

   

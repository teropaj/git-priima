export default function sort(array ) {

     
     
    
   array.sort(function(a, b) {

     

        
             console.log('was here')
             var nameA = a[0].toUpperCase(); // ignore upper and lowercase
             var nameB = b[0].toUpperCase(); // ignore upper and lowercase
        
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

   

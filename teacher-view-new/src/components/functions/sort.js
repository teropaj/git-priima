export default function sort(array,orderByScore) {

     
    const order=orderByScore
    
   array.sort(function(a, b) {

     

        let nameA,nameB
       if (this.order==false){  //sort by alpbab.
             nameA = a[0].toUpperCase(); // ignore upper and lowercase
             nameB = b[0].toUpperCase(); // ignore upper and lowercase
       }
       else {  nameA = a[1]; // ignore upper and lowercase
         nameB = b[1];

       }
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

   

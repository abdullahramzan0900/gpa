import React from "react";
import { useEffect,useState } from "react";
import axios from 'axios'
function  Main(){
    var  numAscending;
    var a=0;
    var check;
    var unique2;
    let arr2=[];
    
  const [num,Setnum]=useState();
  const [attendee,Setattendee]=useState(0);
  const [date,Setdate]=useState(0);// for checking date;
  const [unique,Setunique]=useState(0)

  useEffect(() => {
    axios.get('http://apitest.sertifi.net/api/Students')
.then(response => {
console.log(response);
Setnum(response.data);
 numAscending = [...response.data].sort((a, b) => a.StartYear - b.StartYear);
console.log(numAscending,"ababab");
Setnum(numAscending);
Setunique(numAscending);
});
   }, []);
   console.log(num,"num");
   console.log(unique2,"aaaaaeee")


  
//   const unique2 = unique.filter(element => {
//     const isDuplicate = uniqueIds.includes(element.StartYear);
     
//   uniqueIds.add(element.StartYear);
//     if (!isDuplicate) {
  
//      return true;
//     }
  
//     return false;
//   });
  
//   // 👇️ [{id: 1, name: 'Tom'}, {id: 2, name: 'Nick'}]
//   console.log(unique,"ananan");

  return(

    <>
     <div className="nav">
      <h4>Year</h4>
      <h3>attendance</h3>
      <h3>overall Gpa</h3>
     </div>
     <div>
        {  
           num && num?.map((item,index)=>{         
      
            a=0;

        
            // console.log(check,"check")
            // console.log(check,"cjheck");
             num && num?.slice(0,index+1).map((item2)=>{
               if(item.StartYear<=item2.EndYear )
               {
                  a++;   
               }
          
        })
        // console.log(index,"index"); 
        console.log(item.StartYear!==check && index>5)         
        if(check!==item.StartYear )
        {    
         return(
         <>           
          <h1>{item.StartYear}</h1>
          <h2>{a}</h2>
           </>
         )         
        }
        check=item.StartYear;
        console.log(check,"check");
        })
    }
      
     </div>

    </>
  )
}
export default Main;
import axios from "axios";
import { useEffect, useState } from "react";



function ViewStudents()
{
    const [students , setStudents] =useState([]);
    const [id,setId]=useState(null);
     
    let count=0;


   const getAllStudents= ()=>{
    axios.get("http://localhost:5000/students")
    .then(res=>{
        setStudents(res.data)
        count=count+1;
        console.log(count);
    }
    )
    .catch(error=>alert(error.message));
   }
    useEffect(getAllStudents, [])
  
    const getSingleStudent= ()=>{
      if(id!==null){
      axios.get(`http://localhost:5000/students/${id}`)
      .then(res=>{
          setStudents([res.data])
          count=count+1;
          console.log(count);
      }
      )
      .catch(error=>console.log(error.message));
      }
     }
     useEffect(getSingleStudent ,[id])

     function handelChange(e)
     {
                 setId(e.target.value);
     }


    return <div>
           <h1>Students List:-</h1>
           {/* <button onClick={getAllStudents}>Get Students</button> */}
               <h1>Count of Students : {students.length}</h1>

            Enter StudentId:   <input type="text"  onChange={e=>handelChange(e)}/> 
         
           <table border={1} width="50%">
             <thead>
                 <tr>
                    <th>Id</th>
                    <th>Fullname</th>
                    <th>Email Id</th>
                    <th>Age</th>
                    <th>Batch No.</th>
                    <th>Mode</th>
                 </tr>
             </thead>
             <tbody>
                {
                  students.map(stu=><tr key={stu.id}>
                    <td>{stu.id}</td>
                    <td>{stu.fullName}</td>
                    <td>{stu.emailId}</td>
                    <td>{stu.age}</td>
                    <td>{stu.batchNo}</td>
                    <td>{stu.mode}</td>
                  </tr>)   
                }
             </tbody>

           </table>


    </div>
}

export default ViewStudents;
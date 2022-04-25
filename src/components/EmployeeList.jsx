import { useEffect, useState } from "react"
import "./components.css"
import axios from "axios";
import {Link} from "react-router-dom"
export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(()=>{
       axios.get("http://localhost:8080/employee").then(({data})=>{
           setEmployees(data);
           console.log(data)
       })
  },[])

    return (
        
      <div style={{"alignitems":"center"}}className="list_container">
          {employees.map((e)=>(
   
     

       
        <div key ={e.id}className="employee_card">
           <Link to ={`/employees/${e.id}`}>     
          <img src={e.image} className="employee_image" />
          <br />

          <span className="employee_name">{e.employee_name}</span>
          <br />
          <span  className="employee_title">{e.title}</span>
          </Link> 
        </div>
   
        
   ))}
      </div>
      
    );
  };
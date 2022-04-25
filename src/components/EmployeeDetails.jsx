import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
export const EmployeeDetails = () => {
    const {id} = useParams();
    const[employee, setEmployee] = useState({});
    useEffect(()=>{
      axios.get(`http://localhost:8080/employee/${id}`).then(({data})=>{
        setEmployee(data.data);
      })
    },[]);
    return (
      <div key={employee.employee_id}className="user_details">
       <img src={employee.image} className="user_image" />
       <h4 className="user_name">{employee.employee_name}</h4>
         <span className="user_salary">{employee.salary}$</span>
         <span className="tasks">
           <li className="task">{employee.tasks[0]}</li>
        </span>)
        Status: <b className="status"></b>
        Title: <b className="title"></b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        <button className="promote">promote</button>
      </div>
    );
  };
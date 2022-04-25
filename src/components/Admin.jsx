import { useState } from "react"
export const Admin = () => {
    const [formdata, setFormdata] = useState({
        employee_name :"",
        employee_id :"",
        title:"",
       Salary:"",
       image:"",
       username:"",
       password:"",
       tasks:"",
       status:"",
       team:"",


    });
    const handleChange = (e) => {
        if(e.target.name==="employee_name"){
            setFormdata({
                ...formdata,
                employee_name:e.target.value
            })
        }
        if(e.target.name==="employee_id"){
            setFormdata({
               ...formdata,
               employee_id:e.target.value,
           })
       }
       if(e.target.name==="title"){
        setFormdata({
            ...formdata,
            title:e.target.value,
        })
    }
    if(e.target.name==="Salary"){
        setFormdata({
            ...formdata,
            Salary:e.target.value,
        })
    }
    if(e.target.name==="image"){
        setFormdata({
            ...formdata,
            image:e.target.value,
        })
    }
    if(e.target.name==="username"){
        setFormdata({
            ...formdata,
            username:e.target.value,
        })
    }
    if(e.target.name==="password"){
        setFormdata({
            ...formdata,
            password:e.target.value,
        })
    }
    if(e.target.name==="tasks"){
        setFormdata({
            ...formdata,
            tasks:e.target.value,
        })
    }
    if(e.target.name==="status"){
        setFormdata({
            ...formdata,
            status:e.target.value,
        })
    }
    if(e.target.name==="team"){
        setFormdata({
            ...formdata,
            team:e.target.value,
        })
    }
const {name, value} = e.target;
setFormdata({
           ...formdata,
           [name]:value,
       });
     
   };
   const handleSubmit =(e)=>{
    e.preventDefault();
   console.log(formdata) ;
   fetch(" http://localhost:8080/employee", {
       method:"POST",
       headers:{
        "content-type":"application/json",
     },
       body: JSON.stringify(formdata)
   })
}


    return (
      <form onSubmit={handleSubmit} className="createEmployee">
        <input  onChange={handleChange}  value={formdata.employee_name}type="text" placeholder="Employee Name" name="employee_name" />
        <input  onChange={handleChange}  value={formdata.employee_id}type="text" placeholder="Employee id" name="employee_id" />
        <select  onChange={handleChange}  value={formdata.title}name="title">
          <option value="intern">Intern</option>
          <option value="Jr Software Developer">Jr Software Developer</option>
          <option value="Sr Software Developer">Sr Software Developer</option>
          <option value="Team Lead">Team Lead</option>
        </select>
        <input  onChange={handleChange}  value={formdata.salary}type="number" placeholder="Salary" name="salary" />
        <input  onChange={handleChange}  value={formdata.image}type="text" placeholder="Image" name="image" />
        <input  onChange={handleChange}  value={formdata.username}type="text" placeholder="User Name" name="username" />
        <input  onChange={handleChange}  value={formdata.password}type="password" placeholder="Password" name="password" />
        <input  onChange={handleChange}
         value={formdata.tasks}
          type="text"
          placeholder="Enter tasks separated by commas"
          name="tasks"
        />
        <select  onChange={handleChange}
         value={formdata.status}
        name="status" id="status">
          <option value="">Select Status</option>
          <option value="terminated">Terminated</option>
          <option value="working">Working</option>
        </select>
        <select  onChange={handleChange}
          value={formdata.team}
        name="team" id="team">
          <option value="">Select team</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="qa">QA</option>
        </select>
        <input className="createUser" type="submit" value={"submit"} />
      </form>
    );
  };
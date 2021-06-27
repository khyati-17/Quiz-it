
import axios from 'axios';
import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';

// import { BrowserRouter,Route,Switch} from 'react-router-dom';


const AddUsers = () => {

    let history = useHistory();// for redirecting after pushing data

    const [user,setUsers] =  useState({
        coursename: "",    // name
        courseid:"", //id
        quizlink:""    // quiz link
        });

        const onInputChange = (e) => {
                setUsers({...user,[e.target.name]: e.target.value})
        };

        const onSubmit = async e =>{
            e.preventDefault();
            await axios.post("http://localhost:3001/users",user);
            history.push("/signin");
        };

     return(
    <div className="container ">
   <div className="w-75 mx-auto shadow p-5">
   <h2 className="text-center mb-4">Add A Course</h2>
    <form onSubmit={e => onSubmit(e)}>
        <div className="form-group mb-3">
        <input
         type="text" 
         className="form-control form-control-lg"
          placeholder="Course Name"
          name="coursename"
          value={user.coursename}
          onChange={e => onInputChange(e)}
          />     
        </div>
        <div className="form-group mb-3">
        <input 
        type="text"
         className="form-control"
          placeholder="Course Id"
          name="courseid"
              value={user.courseid}
              onChange={e => onInputChange(e)}
          />
  </div>
  <div className="form-group mb-3">
  {/* <button type="submit" class="btn btn-primary">Submit</button> */}
  <input 
  type="text" 
  className="form-control" 
  placeholder="Quiz Link"
   name="quizlink"
      value={user.quizlink}
      onChange={e => onInputChange(e)}
  />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
)
}

export default AddUsers;
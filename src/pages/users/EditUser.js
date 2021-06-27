
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useHistory,useParams } from 'react-router-dom';

// import { BrowserRouter,Route,Switch} from 'react-router-dom';


const EditUser = () => {

    let history = useHistory();// for redirecting after pushing data
    const {id} = useParams(); // for loading the data of that course

    const [user,setUsers] =  useState({
        coursename: "",    // name
        courseid:"", //id
        quizlink:""    // quiz link
        });

        const onInputChange = (e) => {
                setUsers({...user,[e.target.name]: e.target.value})
        };

        useEffect(() => {
            loadUser();
        },[]);

        const onSubmit = async e =>{
            e.preventDefault();
            await axios.put(`http://localhost:3001/users/${id}`,user);
            history.push("/signin");
        };

        const loadUser = async () => {
            const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUsers(result.data);
        }

     return(
    <div className="container ">
   <div className="w-75 mx-auto shadow p-5">
   <h2 className="text-center mb-4">Edit A Course</h2>
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

export default EditUser;

import React , {useState,useEffect} from 'react';
import './Courses.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Courses = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users")
        setUsers(result.data.reverse());
    }
    
    const deleteUser = async id =>{
       await axios.delete(`http://localhost:3001/users/${id}`)   
        loadUsers();
    }


return(
    <>
     <Link exact to="/users" className="btn btn-warning m">
      Add Course
       </Link>
   <div className="container">
   <div className="py-4">
   <table className="table border shadow table-sm">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Course Name</th>
      <th scope="col">Course Id</th>
      <th scope="col">Quiz Link</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody className="small">
  {
      users.map((users,index) => (
          <tr>
              <th scope="row">{index+1}</th>
              <td>{users.coursename}</td>
              <td>{users.courseid}</td>
              <td>{users.quizlink}</td>
              <td>
                  <Link className="btn btn-primary" to={`/view/${users.id}`} >View</Link>
                  <Link className="btn btn-outline-primary" to={`/edit/${users.id}`}>Edit</Link>
                  <Link className="btn btn-danger" onClick={() => deleteUser(users.id)}>Delete</Link>
              </td>
          </tr>
      ))}
  </tbody>
</table>
   </div>
   </div>
   </>
)
}
//users.name=course name
//users.username=course id name cs304
//users.email = link of quiz
export default Courses;
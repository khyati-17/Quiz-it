import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';


const ViewUser = () => {
    const [user,setUser] =  useState({
        coursename: "",    // name
        courseid:"", //id
        quizlink:""    // quiz link
        });

        const {id} = useParams();
        useEffect(() => {
            loadUser();
        },[]);
        const loadUser = async () => {
            const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
        }

    return (
       <div className="container py-4">
           <Link className="btn btn-primary" to="/signin">
               back to main
           </Link>
           <h1 className="display-4">User id: {id}</h1>
           <hr />
           <ul className="list-group w-50">
               <li className="list-group-item">Course Name: {user.coursename}</li>
               <li className="list-group-item">Course Id: {user.courseid}</li>
               <li className="list-group-item">Quiz Link: {user.quizlink}</li>
           </ul>
       </div>
    )
}

export default ViewUser;

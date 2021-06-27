import React from 'react';
import Courses from './Courses';
import { BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import AddUsers from './users/AddUsers';


const Signin = () => {
return(
  <>
     <div>
       <Courses/>
     </div>
     </>
   
)
}

export default Signin;
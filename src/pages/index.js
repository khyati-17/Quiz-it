import React ,{useState} from 'react';
import Navbar from '../components/Navbar';
import {Route,Link,Switch} from 'react-router-dom';
import Signin from './Signin';
import AddUsers from './users/AddUsers';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

const Home = () => {
    return (
        <>
        <Navbar/>
        <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/users" component={AddUsers} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route exact path="/view/:id" component={ViewUser} />
        </Switch>
       
        </>
    )
}

export default Home;

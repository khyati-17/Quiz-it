import React ,{useState} from 'react';
import {FaBars} from 'react-icons/fa';//for side bar icon and all icons
import {Nav,NavLogo,NavbarContainer,NavBtn,NavBtnLink } from './NavbarElement';
import { Link } from 'react-router-dom'; //link makes refrshing of page to stop
import './NavBar.css';

const Navbar = ({}) => {

    const[navbar,setNavbar] =useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true)
        }
        else{
            setNavbar(false);
        }
      }

    window.addEventListener('scroll',changeBackground);

    return (
        <>
        <Nav className={navbar ? 'navbar active' : 'navbar'}>
            <NavbarContainer>
                <NavLogo to='/'>
                Quiz-It
                </NavLogo>
                <NavBtn>
                    <NavBtnLink exact to="/signin">
                    {/* <Link to="/signin"> */}
                    Add Courses
                    {/* </Link> */}
                    </NavBtnLink>
                </NavBtn>
                </NavbarContainer>
                </Nav>
                </>
    )

}

export default Navbar;
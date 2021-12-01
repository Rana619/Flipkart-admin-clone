import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../../actions/auth.actions';
import flipkart from '../../img/flipkart.png';

function Header(props) {

  const auth = useSelector(state => state.auth) 

   function ifUserNotLogin(){
     return(
      <Nav>
      <li className="nav-item" >
         <NavLink to="/signin" className="nav-link" >Signin</NavLink>
      </li>
      <li className="nav-item" >
         <NavLink to="/signup" className="nav-link" >Signup</NavLink>
      </li>
   </Nav>
     )
   }

   const dispatch = useDispatch();

   function logOut() {
     dispatch(signout());
   }


   function ifUserLoggedin(){
     return(
      <Nav>
      <li className="nav-item" >
         <span className="nav-link" style={{cursor : "pointer"}} onClick={logOut} >Signout</span>
      </li>
   </Nav>
     )
   }


    return (
        <div>
  <Navbar  collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ zIndex : 1 }} >
  <Container fluid >
  {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
  <Link to="/" className="navbar-brand" ><img style={{height : "20px"}} src={flipkart} /> Admin Dashboard</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    {auth.authenticate ?  ifUserLoggedin() : ifUserNotLogin() }
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header;


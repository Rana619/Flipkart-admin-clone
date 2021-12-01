import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import Header from '../Header/index.js';
import { NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

function Layout(props) {
    return (
        <>
            <Header />
            {
                props.sidebar ?
                <Container fluid >
               <Row>
                 <Col md={2} className="sideBar" >
                    <ul>
                        <li><NavLink to={'/'} style={{ backgroundColor : 'blue' }} >Home</NavLink></li>
                        <li><NavLink to={'/page'} >Page</NavLink></li>
                        <li><NavLink to={'/category'} >Category</NavLink></li>
                        <li><NavLink to={'/products'} >Products</NavLink></li>
                        <li><NavLink to={'/orders'} >Orders</NavLink></li>
                        <li><NavLink to={'/createHomePage'} >Create Home Page</NavLink></li>
                    </ul>
                 </Col>
                 <Col md={10} style={{ marginLeft : "auto", paddingTop : "60px" }} >
                 { props.children }
                 </Col>
               </Row>
             </Container> :
              props.children 
            }
        </>
    )
}

export default Layout

import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../../actions';
import flipkartLogo from '../../img/flipkartLogo.png';
import './style.css';

function Signup(props) {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      if(!user.loading){
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
      }
    },[user.loading]);

    function userSignUp(event){

    event.preventDefault();

    const user = {
       firstName,lastName, email, password
    }

    dispatch(signup(user));
 
}

    if(auth.authenticate){
        return <Redirect to={'/'} />
    }
    
    if(user.loading){
        return <p>Loading.....!!</p>
    }


    return (
        <div>
        <Layout>
        <div className="signupCont" >
        <div className="logoCont" style={{marginTop : "20px"}} >
                    <img src={flipkartLogo} />
                    <div>Flipkart Admin Signup</div>
        </div>
        <Container>
             { user.message }
                  <Row style={{marginTop : "50px"}} >
                      <Col md={{span:6, offset:3}} >
                      <Form onSubmit={ userSignUp } >
                       <Row>
                           <Col md={6} >
                               <Input
                               Label="First Name"
                               type="text"
                               placeholder="First Name"
                               errorMsg =""
                               value={firstName}
                               onChange={(e)=> setFirstName(e.target.value)}
                                />
                           </Col>
                           <Col md={6} >
                              <Input
                               Label="Last Name"
                               type="text"
                               placeholder="Last Name"
                               errorMsg =""
                               value={lastName}
                               onChange={(e)=> setLastName(e.target.value)}
                              />
                           </Col>
                       </Row>


                       <Input
                               Label="Email Address"
                               type="email"
                               placeholder="Email Address"
                               errorMsg =""
                               value={email}
                               onChange={(e)=> setEmail(e.target.value)}
                              />

                       <Input
                               Label="Password"
                               type="password"
                               placeholder="Password"
                               errorMsg =""
                               value={password}
                               onChange={(e)=> setPassword(e.target.value)}
                              />
                        <div className="btnCont" >
                           <Button variant="primary" type="submit"  >
                              Signup
                           </Button>
                        </div>
                    </Form>
                      </Col>
                  </Row>                   
                </Container>
                </div>
        </Layout>
        </div>
    )
}

export default Signup;

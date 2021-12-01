import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/index.js';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input/index.js';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { isUserLoggedIn, login } from '../../actions';
import flipkartLogo from '../../img/flipkartLogo.png';
import './style.css'

function Signin(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

function userLogin(event){

    event.preventDefault();

    const user = {
        email, password
    }

    dispatch(login(user));
 
}

if(auth.authenticate){
    return <Redirect to={'/'} />
}


    return (
        <div>
            <Layout>
               <div className="signinCont" >
                <div className="logoCont" >
                    <img src={flipkartLogo} />
                    <div>Flipkart Admin Signin</div>
                </div>
                <Container>
                  <Row style={{marginTop : "50px"}} >
                      <Col md={{span:6, offset:3}} >
                      <Form onSubmit = {userLogin} >
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
                               onChange={(e)=> setPassword( e.target.value )}
                              />
                        <div className="btnCont" >
                        <Button variant="primary" type="submit">
                            Signin
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

export default Signin

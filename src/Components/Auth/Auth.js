import React, { useState } from 'react';
import {
    Button,
    Col,
    Container,
    Row,
} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    
    const [login, setLogin] = useState(true);

    let changeLogin = (e) => {
        e.preventDefault();
        setLogin(!login);
    }

    return(
        <Container className='auth-container'>
            <Col md={{offset: 5}}>
                {
                    login ?
                    <Row>
                        <Login updateToken={props.updateToken} />
                    </Row> 
                    :
                    <Row>
                        <Signup updateToken={props.updateToken} /> 
                    </Row>
                }
                <br />
                <Row>
                    <Button onClick={(e) => changeLogin(e)}>{ login ? 'Sign Up' : 'Log In' }</Button>
                </Row>
            </Col>
        </Container>
    )
}

export default Auth;
import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Button
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
            {
                login ?
                <Row>
                    {/* <Col> */}
                        <Login updateToken={props.updateToken} />
                    {/* </Col> */}
                </Row> 
                :
                <Row>
                    {/* <Col> */}
                        <Signup updateToken={props.updateToken} /> 
                    {/* </Col> */}
                </Row>
            }
            <br />
            <Row>
                <Button onClick={(e) => changeLogin(e)}>{ login ? 'Sign Up' : 'Log In' }</Button>
            </Row>
        </Container>
    )
}

export default Auth;
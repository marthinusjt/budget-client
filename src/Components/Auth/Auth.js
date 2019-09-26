import React, { useState } from 'react';
import {
    Button,
    Col,
    Container,
    Row,
} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import bgimage from '../../Assets/Budget.jpg'

const Auth = (props) => {
    
    const [login, setLogin] = useState(true);

    let changeLogin = (e) => {
        e.preventDefault();
        setLogin(!login);
    }

    return(
        <div style={{width: '100vw', fontWeight: 'bold', backgroundColor: 'whitesmoke', backgroundImage: `url(${bgimage})`, backgroundSize: 'cover'}}>
            <Container className='auth-container' style={{height: '100vh'}}>
                <Col md={{offset: 5}} style={{padding: '10em 0em', fontSize: '1.5em', fontFamily: 'Arial, Helvetica, sans-serif'}} >
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
        </div>
    )
}

export default Auth;
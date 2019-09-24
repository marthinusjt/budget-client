import React, { useState } from 'react';
import {
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let url = `http://localhost:3020/user/login`

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: email,
                    password: password
                }
            }),
            headers: new Headers({
                'Content-type' : 'application/json'
            })
        }).then(
            (res) => res.json()
        ).then((data) => {
            console.log(data)
            props.updateToken(data.token)
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='email'>E-mail</Label>
                    <Input autoComplete="off" onChange={(e) => setEmail(e.target.value)} type="email" name='email' value={email || ''} required/> 
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    {
                        password.length < 5 || password === '' ?
                        <React.Fragment>
                            <Input invalid onChange={(e) => setPassword(e.target.value)} type="password" name='password' value={password} required />
                            <FormFeedback>Password needs to be 5 or more characters!</FormFeedback>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <Input valid onChange={(e) => setPassword(e.target.value)} type="password" name='password' value={password} required />
                            <FormFeedback valid>Password meets the requirements</FormFeedback>
                        </React.Fragment>
                    }
                </FormGroup>
                {
                    password.length < 5 || password === '' || email === '' ?
                    <Button type='submit' disabled>Log In</Button>
                    :
                    <Button type='submit' active>Log In</Button>
                }
            </Form>
        </div>
    )
}

export default Login;
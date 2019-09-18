import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
                    <Input onChange={(e) => setEmail(e.target.value)} name='email' value={email} required/> 
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password} required/> 
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Login;
import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const Signup = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(firstName, lastName, email, password)
        let url = `http://localhost:3020/user/signup`

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ 
                user: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                }
            }),
            headers: new Headers({
                'Content-Type' : 'application/json'
            })
        }).then(
            (res) => res.json()
        ).then((data) => {
            console.log(data);
            props.updateToken(data.token)
        })
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='firstName'>First Name</Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} name='firstName' value={firstName} required /> 
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Input onChange={(e) => setLastName(e.target.value)} name='lastName' value={lastName} required /> 
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'>E-mail</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name='email' value={email} required /> 
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password} required />
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Signup
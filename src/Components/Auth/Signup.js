import React, { useState } from 'react'
import {
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

const Signup = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(firstName, lastName, email, password)

        let url = `http://localhost:3020/user/signup`
        // let url = `https://mjtbudgetserver.herokuapp.com/user/signup`

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
            // console.log(data);
            props.updateToken(data.token)
        })
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for='firstName'>First Name</Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} name='firstName' value={firstName} required /> 
                </FormGroup>
                <FormGroup>
                    <Label for='lastName'>Last Name</Label>
                    <Input onChange={(e) => setLastName(e.target.value)} name='lastName' value={lastName} required /> 
                </FormGroup>
                <FormGroup>
                    <Label for='email'>E-mail</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} type="email" name='email' value={email} required />
                    <FormFeedback></FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
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
                {/* <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" name='password' value={password} required />
                </FormGroup> */}
                {
                    password.length < 5 || password === '' ?
                    <Button type='submit' disabled>Create User</Button>
                    :
                    <Button type='submit' active>Create User</Button>
                }
            </Form>
        </div>
    )
}

export default Signup
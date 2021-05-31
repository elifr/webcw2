import React, { useRef, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4} from 'uuid'
import Axios from 'axios';
import Dashboard from './../Dashboard'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

export default function Login({ onIdSubmit }) {

    const userRef = useRef()
    const passRef = useRef()
    const [notice, setNotice] = useState()


    function handleSubmit(e) {
        e.preventDefault()

        console.log(userRef.current.value)
        console.log(passRef.current.value)
        signIn();

        <Route path="/home" component={Dashboard} /> 


    }

    function signIn() {        
        var userName = userRef.current.value
        var pass = passRef.current.value

        Axios.defaults.baseURL = "http://localhost:3000";
        Axios.post('/api/users/signin',  {

            username: userName,
            password: pass,

        },
        {
            withCredentials: true,
        }).then(response => {
            console.log("user signed in");
            onIdSubmit(userRef.current.value)
            setNotice("")
        }).catch(
            
            console.log("incorrect login info"),
            setNotice("Incorrect Login Info"),
        );

    }



/*
    function createNewId() {
        onIdSubmit(uuidV4())
    }*/


    return (
        <body className='background'>

       
        <Container className="align-items-center d-flex" style = {{height: '80vh'}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="notice">
                    {notice}
                </Form.Group>
                <Form.Group>
                    <Form.Label> Enter Your Student Username</Form.Label>
                    <Form.Control type="text" ref={userRef} required />
                    <Form.Label> Enter Your Uni Chat Password</Form.Label>
                    <Form.Control type="password" ref={passRef} required />
                </Form.Group>
                <Button type="submit" className = "mr-2">Login</Button>
                <Button variant="secondary"> Sign Up</Button>
            </Form>
        </Container>
        </body>


    )
}


import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4} from 'uuid'

export default function Login({ onIdSubmit }) {

    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }


    return (
        <body className='background'>

       
        <Container className="align-items-center d-flex" style = {{height: '80vh'}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label> Enter Your Student Username</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                    <Form.Label> Enter Your Uni Chat Password</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className = "mr-2">Login</Button>
                <Button onClick={createNewId} variant="secondary"> Sign Up</Button>
            </Form>
        </Container>
        </body>


    )
}


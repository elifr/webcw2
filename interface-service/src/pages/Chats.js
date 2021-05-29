import React from 'react';
import Axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import Posts from './../components/Posts';
import './../App.css';
import $ from 'jquery'; 
import Dropdown from '../components/Dropdown';

function Chats() {

    const items = [
        {
            id:1,
            value: 'one',
        },
        {
            id:2,
            value: 'two',
        },        {
            id:3,
            value: 'three',
        },
    ]


    function getChannel() {

    }


    return (

        <div className='container'>
            <Dropdown title="Select Group Chat" items={items} />
        </div>
        /*
        <body className='background'>
                   <div className = "container">
                        <ChatDropdown title="Select Chat" items = {items}/>
                    </div>
            <Container>
                <Form onSubmit={getChannel}>
                    <Form.Group>
                        <Form.Label> Group Chat</Form.Label>

                    </Form.Group>

                    <Form.Group>
 
                        <Button type="submit" >Join Chat</Button>
                    </Form.Group>
                </Form>

            </Container>
            
        </body>*/
    )
}

export default Chats
import React, { Component, useRef, useState } from 'react'
import Axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import Posts from './../components/Posts';
import './../App.css';
import $ from 'jquery'; 
import Dropdown from '../components/Dropdown';

function Chats() {

    var [userModules, setModules] = useState("");
    var [moduleObj, setObjects] = useState([]);




    function getChatGroups () {



        var moduleObjects = [];

        Axios.defaults.baseURL = "http://localhost:3000";
        Axios.get("/api/users/currentuser", {
          withCredentials: true,
        })
          .then((response) => {
            setModules(response.data.modules);
          })
          .catch((err) => {
            console.log(err);
          });


        console.log("start");

        console.log(userModules);

        console.log(userModules.length);

        console.log(userModules[1]);


        for (var m = 1; m <= userModules.length; m++) {
            console.log("heredd");
            moduleObjects.push({
                id: m,
                value: userModules[m-1],
            })
            console.log(moduleObjects);
        }

        setObjects(moduleObjects);
    };


    /*[
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
    
                <div className='dropBox'>
                <Button onClick={getChatGroups} > Refresh Modules list </Button>
                <Dropdown items={moduleObj} />

            </div>
        */



    return (
        <body className='background'>

            <div>
            <a className='dropBox' href="http://localhost:7000/lobby">Take Me to Modules Chats</a>

            </div>
        </body>

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
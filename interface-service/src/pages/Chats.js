import React, { Component, useRef, useState } from 'react'
import Axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import Posts from './../components/Posts';
import './../App.css';
import $ from 'jquery'; 
import Dropdown from '../components/Dropdown';

function Chats() {

    var [userModules, setModules] = useState("");



    function getChatGroups () {

        var moduleObjects = [];

        Axios.defaults.baseURL = "http://localhost:3000";
        Axios.get("/api/users/currentuser", {
          withCredentials: true,
        })
          .then((response) => {
            console.log(response.data.modules);
            setModules(response.data.modules);
          })
          .catch((err) => {
            console.log(err);
          });


        console.log("start");
        console.log(userModules);
       // console.log(userModules.get("length"));
        
       // userModules = userModules.toString();

        console.log(userModules);
       // console.log("hree")
       // userModules = userModules.repalce("[],"")
       // userModules = userModules.split(",");

/*
        for (var m = 1; m <= userModules.length; m++) {
            console.log("heredd");
            moduleObjects.push({
                id: m,
                value: userModules[m-1],
            })
            console.log(moduleObjects);
        }*/

        return (userModules)/*
            [
            {
                id:1,
                value: 'onte',
            },
            {
                id:2,
                value: 'two',
            },        {
                id:3,
                value: 'three',
            },
        ])*/
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
    ]*/



    return (
        <body className='background'>
            <div className='dropBox'>
                <Dropdown onClick={getChatGroups} items={items} />
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
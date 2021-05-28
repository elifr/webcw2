import React, { Component, useState } from 'react'
import Axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap'
import Posts from './../components/Posts'

function Feed() {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [username, setUserName] = useState("");
    /*const [userId, setId] = useState("");*/

    function getPost() {
        Axios.defaults.baseURL = "http://localhost:4444";
        Axios.get('/posts',  { crossdomain: true }).then(response => {
            console.log(response.data.slice(-1)[0]);
            setTitle(response.data.slice(-1)[0].title);
            setText(response.data.slice(-1)[0].text);
            console.log(response.data);
            let id = response.data[0]._id;
            Axios.get('/posts/' + id,  { crossdomain: true }).then(response => {
                setUserName(response.data.username);
            });
        });
        }

    function setPost() {
        const userId = "607d7a52ac3ab838bc665a75";
        const newTitle = "title two";
        const newText = "new content of post";

        Axios.defaults.baseURL = "http://localhost:4444";
        Axios.post('/posts',  {

            UserId: userId,
            title: newTitle,
            text: newText,
        }).then(response => {
            console.log("post made");
        });

    }

  return (
      <div>
        <button onClick={setPost}>Make Post</button>
        <button onClick={getPost}>Load Posts</button>
        <h1>{title}</h1>
        <h3>{"-" + text}</h3>
        <h4> {username} </h4>
      </div>

    )
  }
/*
    return (
        <Container className='feed'>
            <p>
                <h1>Feed-</h1>
                {messages}
                <Posts/>
            </p>

            <Form>
                <Button type="submit">buttonText</Button>
            </Form>
        </Container>

    )
}*/













/*

const browserFeed = async () => {  
    const response = await browse();
    console.log(response)
    /*setFeed(response.data.results);*/  // undefined
    /*setIntialized(true);  
  };

export const browse = () =>  {
    Axios.defaults.baseURL = "http://localhost:4444";
    return Axios.get('/posts').catch((error) => {
        return error;
    });
};
*/



export default Feed
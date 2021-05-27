import React, { Component } from 'react'
import Axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap'
import Posts from './../components/Posts'

function Feed() {

    const messages = "temp"; /*browserFeed()*/

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
}















const browserFeed = async () => {  
    const response = await browse();
    console.log(response)
    /*setFeed(response.data.results);*/  // undefined
    /*setIntialized(true);  */
  };

export const browse = () =>  {
    Axios.defaults.baseURL = "http://localhost:4444";
    return Axios.get('/posts').catch((error) => {
        return error;
    });
};




export default Feed
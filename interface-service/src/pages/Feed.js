import React, { Component } from 'react'
import Axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap'

function Feed() {

    const messages = ""

    return (
        <Container className="align-items-center d-flex" style={{height: "100vh" }}>

            <div className='feed'>
                <h1>Feed-</h1>
                <>
                    {messages}

                </>
            </div>
            <Form >
                <Button type="submit">buttonText</Button>
            </Form>
        </Container>

    )
}



/*
const setText = () => {
    setState({testContent: "this is info from the function"});
}

const getFeed = () => {
    Axios.defaults.baseURL = "http://localhost:4444";
    Axios.get('/posts').then((response) => {
        console.log(response.data);
    });
}


const getBlogPost = () => {
    Axios.defaults.baseURL = "http://localhost:4444";
    Axios.get('/posts')
    .then((response) => {
        const data = response.data;
        this.setState({ posts: data })
        console.log("data found");
    })
    .catch(() => {
        alert("cant find mongo db data")
    })
}*/


export default Feed
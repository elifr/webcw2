import React, { Component, useState } from 'react'
import Axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap'
import Posts from './../components/Posts'
import './../App.css';
import $ from 'jquery'; 

function Feed() {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [username, setUserName] = useState("");
    /*const [userId, setId] = useState("");*/


    function getPost() {
        Axios.defaults.baseURL = "http://localhost:4444";
        Axios.get('/posts',  { crossdomain: true }).then(response => {
            let numPosts = Math.min(response.data.length, 5)

            let posts = $("#posts");
            console.log(posts.length);

            var node = document.getElementById('posts');
            node.innerHTML = "";

            for (var p = 1; p <= numPosts; p++ ){

                console.log("posts")
                console.log(response.data.slice(-p)[0].title)
                console.log(response.data.slice(-p)[0].text)

                
                let title = response.data.slice(-p)[0].title;
                let content = response.data.slice(-p)[0].text;
                let id = response.data.slice(-p)[0]._id;

                let postClone = $("#templates #post-template").clone();
                postClone.find("#post-title").text(title);
                postClone.find("#post-text").text(content);

                Axios.get('/posts/' + id,  { crossdomain: true }).then(response => {
                    postClone.find("#post-userName").text("By: " + response.data.username);
                    setUserName(response.data.username);
                });


                posts.append(postClone);

            }


            setTitle(response.data.slice(-1)[0].title);
            setText(response.data.slice(-1)[0].text);


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

        <body className='background'>

            <div className='mainButtonFrame'>
                <button className= 'mainButton' onClick={setPost}>Make Post</button>
                <button className= 'mainButton' onClick={getPost}>Load Posts</button>
            </div>

            <div id="posts">
            </div>

            
            <div id="templates" style= {{display: "none"}}>
                <div id='post-template' className='feedPost'>
                    <h1 id='post-title'/>
                    <pg id='post-text' />
                    <h6 id='post-userName' />
                </div>
            </div>
            
            
        </body>


    )
  }





export default Feed
import React, { useState, useRef } from "react";
import Axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import "./../App.css";
import $ from "jquery";

function Feed() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [username, setUserName] = useState("");
  const titleRef = useRef();
  const contentRef = useRef();
  /*const [userId, setId] = useState("");*/

  function makePost(e) {
    e.preventDefault();
    setPost();
    console.log(titleRef.current.value);
    console.log(contentRef.current.value);
  }

  function getPost() {
    Axios.defaults.baseURL = "http://localhost:4000";
    Axios.get("/posts", { crossdomain: true }).then((response) => {
      let numPosts = Math.min(response.data.length, 7);

      let posts = $("#posts");

      var node = document.getElementById("posts");
      node.innerHTML = "";

      for (var p = 1; p <= numPosts; p++) {
        /*console.log("posts")
                console.log(response.data.slice(-p)[0].title)
                console.log(response.data.slice(-p)[0].text)*/

        let title = response.data.slice(-p)[0].title;
        let content = response.data.slice(-p)[0].text;
        let id = response.data.slice(-p)[0]._id;

        let postClone = $("#templates #post-template").clone();
        postClone.find("#post-title").text(title);
        postClone.find("#post-text").text(content);

        Axios.get("/posts/" + id, { crossdomain: true }).then((response) => {
          postClone
            .find("#post-userName")
            .text("By: " + response.data.username);
          setUserName(response.data.username);
        });

        posts.append(postClone);
      }

      setTitle(response.data.slice(-1)[0].title);
      setText(response.data.slice(-1)[0].text);
    });
  }

  function setPost() {
    /*check userId if not found then create alert no not sigend in?*/
    var userId = "";

    Axios.defaults.baseURL = "http://localhost:3000";
    Axios.get("/api/users/currentuser", {
      withCredentials: true,
    })
      .then((response) => {
        console.log(response.data.id);
        userId = response.data.id;
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.defaults.baseURL = "http://localhost:4000";
    Axios.post(
      "/posts",
      {
        title: titleRef.current.value,
        text: contentRef.current.value,
        UserId: userId,
      },
      {
        withCredentials: true,
      }
    )
      .then((response) => {
        document.getElementById("titleField").value = "";
        document.getElementById("messageField").value = "";
        console.log("post made");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <body className="background">
      <div className="frameBack">
        <Container className="mainButtonFrame">
          <Form onSubmit={makePost}>
            <Form.Group className="newPost">
              <Form.Label> Create New Post </Form.Label>
            </Form.Group>

            <Form.Group className="newPost">
              <Form.Label> Title:</Form.Label>
              <Form.Control
                class="col-xs-3"
                type="text"
                id="titleField"
                ref={titleRef}
                required
              />

              <Form.Label> Message:</Form.Label>
              <Form.Control
                class="col-xs-3"
                type="text"
                id="messageField"
                ref={contentRef}
                required
              />
            </Form.Group>

            <Form.Group className="newPost">
              <Button type="submit">Make Public Post</Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
      <Form className="sepButton">
        <Form.Group className="newPost">
          <Button class="btn-block" onClick={getPost}>
            Load Recent Posts
          </Button>
        </Form.Group>
      </Form>

      <div id="posts"></div>

      <div id="templates" style={{ display: "none" }}>
        <div id="post-template" className="feedPost">
          <h4 id="post-title" className="postContent" />
          <p id="post-text" className="postContent" />
          <p id="post-userName" className="postContent" />
        </div>
      </div>
    </body>
  );
}

export default Feed;

import React, { useState } from 'react'
import Axios from 'axios';
import './../App.css';

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





    return (
        <body className='background'>

            <div>
            <a className='dropBox' href="http://localhost:7000/lobby">Take Me to Modules Chats</a>

            </div>
        </body>


    )
}

export default Chats
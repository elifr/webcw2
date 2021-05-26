import React from 'react';
import Axios from 'axios';



function App() {
    return (

        "hello world"

       // getFeed()
    );
}

const getFeed = () => {
    Axios.get("http:localhost:4444/posts").then((response) => {
        console.log(response.data);
    });
}


export default App;
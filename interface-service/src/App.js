import React from 'react';
import Axios from 'axios';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Reports from './pages/Reports';
import About from './pages/About';

function App() {
    return (
        <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/reports' component={Reports} />
                <Route path='/about' component={About} />
            </Switch>
        </Router>
        </>

       // getFeed()
    );
}

const getFeed = () => {
    Axios.get("http:localhost:4444/posts").then((response) => {
        console.log(response.data);
    });
}


export default App;
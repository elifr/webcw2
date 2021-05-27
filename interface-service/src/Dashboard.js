import React from 'react';
import Axios from 'axios';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Chats from './pages/Chats';
import About from './pages/About';

export default function Dashboard({ id }) {
    return (
        <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/feed' component={Feed} />
                <Route path='/chats' component={Chats} />
                <Route path='/about' component={About} />
            </Switch>
        </Router>
        </>

    );
}





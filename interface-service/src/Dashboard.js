import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Chats from './pages/Chats';
import About from './pages/About';
import Login from './pages/Login';

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
                <Route render={() => <Redirect to={{pathname: "/home"}} />} />
            </Switch>
        </Router>
        </>

    );
}





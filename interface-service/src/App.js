import React from 'react';
import Axios from 'axios';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Chats from './pages/Chats';
import About from './pages/About';
import Login from './pages/Login';
import useLocalStorage from './hooks/useLocalStorage';
import Dashboard from './Dashboard';

function App() {
    const [id, setId] = useLocalStorage('id')

    return (
        id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
    )
}




export default App;
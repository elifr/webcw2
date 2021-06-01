import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './Dashboard';

function App() {
    const [id, setId] = useState();
    return (
     id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />   
    )
}

export default App;
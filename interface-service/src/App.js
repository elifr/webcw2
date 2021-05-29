import React from 'react';
/*import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';*/
import './App.css';
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
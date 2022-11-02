import './App.css';
import axios from 'axios';
import {useState} from 'react';
import Todo from './components/Todo/Todo';
import Auth from './components/Auth/Auth';

function App() {
  const [token, setToken] = useState(!!localStorage.getItem("token"));
  const [activeID, setActiveID] = useState(!!localStorage.getItem("activeID"));  
  return (
    token && activeID ? <Todo /> : <Auth />
  )
}

export default App;

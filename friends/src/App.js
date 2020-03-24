import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from "./Components/Login"
import FriendsList from './Components/FriendsList'

import './App.css';

function App() {
  return (
    <Router>
      <Route path='/login' component={Login}/>
      <Route path='/friends' component={FriendsList} />
    </Router>
  );
}

export default App;

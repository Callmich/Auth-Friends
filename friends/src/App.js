import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from "./Components/Login"
import FriendsList from './Components/FriendsList'
import PrivateRoute from './Components/PrivateRoute'

import './App.css';

function App() {
  return (
    <Router>
      <Route path='/login' component={Login}/>
      <PrivateRoute exact path='/friends' component={FriendsList} />
    </Router>
  );
}

export default App;

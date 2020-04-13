import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from "./Components/Login"
import FriendsList from './Components/FriendsList'
import PrivateRoute from './Components/PrivateRoute'
import FriendForm from './Components/FriendForm'

import './App.css';

function App() {
  return (
    <Router>
      <Route path='/login' component={Login}/>
      <PrivateRoute exact path='/friends' component={FriendsList} />
      <PrivateRoute exact path='/addfriend' component={FriendForm} />

    </Router>
  );
}

export default App;

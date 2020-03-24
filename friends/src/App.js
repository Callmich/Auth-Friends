import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from "./Components/Login"

import './App.css';

function App() {
  return (
    <Router>
      <Route path='/login' component={Login}/>
    </Router>
  );
}

export default App;

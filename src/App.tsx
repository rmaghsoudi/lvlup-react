import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
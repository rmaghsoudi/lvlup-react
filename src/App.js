import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavMenu></NavMenu>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

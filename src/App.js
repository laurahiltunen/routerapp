import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Navigator from './Navigator';
import"bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className = "App">
      <h1>React router</h1>
     <BrowserRouter>
      <div>
        <Navigator />
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/contact" component = {Contact}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/links" render = {() => <h1>Links</h1>}/>
          <Route render = {() => <h1>Page not found</h1>}/>
        </Switch>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

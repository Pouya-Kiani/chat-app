import React, { Fragment } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/login'
          render={props => {return (
            <h1>Login</h1>
          )}}
        />
        <Route 
          path='/'
          exact
          render={props => {
            return (
              <h1>Root</h1>
            );
          }}
        />
        <Route 
          path='/'
          render={props => {
            return (
              <h1>404 path not found</h1>
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

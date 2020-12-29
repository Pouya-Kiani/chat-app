import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux'


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

const mapStateToProps = state => ({
  ...state.auth
})
const mapDispatchToProps = dispatch => ({

})
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);

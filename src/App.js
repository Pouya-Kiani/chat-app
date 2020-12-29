import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux'
import * as ChatActions from './store/actions/chatActions'


class App extends Component {
  componentDidMount() {
    console.log('mounted')
    this.props.setupSocket();
  }
  render() {
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
}


const mapStateToProps = state => ({
  ...state.auth,
  ...state.chat
})
const mapDispatchToProps = dispatch => ({
  setupSocket: () => {
    dispatch(ChatActions.setupSocket())
  }
})
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);

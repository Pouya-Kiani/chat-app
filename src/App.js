import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'

import Auth from './components/pages/Auth'
import * as ChatActions from './store/actions/chatActions'
import * as AuthActions from './store/actions/authActions'

import 'bootstrap/dist/css/bootstrap.min.css'
import Messenger from './components/pages/Messenger';


class App extends Component {
  componentDidMount() {
    this.props.setupSocket(this.props.token, this.props.user.id);
  }

  // componentDidUpdate() {
  //   if(this.props.socket === null) {
  //     console.log('lost connection')
  //     this.props.setupSocket(this.props.token, this.props.user.id);
  //   }
  // }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          
          <Switch>
            <Route
              path='/login'
              render={props => {
                if(this.props.token) {
                  return (
                    <Redirect to='/' />
                  )
                } else {
                  return (
                    <Auth />
                  )
                }
              }}
            />
            <Route
              path='/signup'
              render={props => {
                if(this.props.token) {
                  return (
                    <Redirect to='/' />
                  )
                } else {
                  return (
                    <Auth />
                  )
                }
              }}
            />
            <Route 
              path='/'
              exact
              render={props => {
                if(!this.props.token) {
                  return (
                    <Redirect to='/login' />
                  )
                } else {
                  return (
                    <Fragment >
                      <h1>Root</h1>
                      <button className="logout-button form-submit" onClick={this.props.logOut}>Log Out</button>
                      <Messenger />
                    </Fragment>
                  );
                }
              }}
            />
            <Route 
              path='/:threadId'
              render={props => {
                if(!this.props.token) {
                  return (
                    <Redirect to='/login' />
                  )
                } else {
                  return (
                    <Fragment >
                      <h1>Root</h1>
                      <button className="logout-button form-submit" onClick={this.props.logOut}>Log Out</button>
                      <Messenger />
                    </Fragment>
                  );
                }
              }}
            />
            {/* <Route 
              path='/'
              render={props => {
                return (
                  <h1>404 path not found</h1>
                );
              }}
            /> */}
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}


const mapStateToProps = state => ({
  ...state.auth,
  ...state.chat
})
const mapDispatchToProps = dispatch => ({
  setupSocket: (token, userId) => {
    dispatch(ChatActions.setupSocket(token, userId))
  },
  logOut: () => {
    dispatch(AuthActions.logOut());
  }
})
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);

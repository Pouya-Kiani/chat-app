import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'

import Auth from './components/pages/Auth'
import * as ChatActions from './store/actions/chatActions'
import * as AuthActions from './store/actions/authActions'

import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  componentDidMount() {
    console.log('mounted')
    this.props.setupSocket();
  }
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
              component={Auth}
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
                      <button onClick={this.props.logOut}>Log Out</button>
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
         <button onClick={ev => {
           ev.preventDefault();
           if(this.props.socket) {
             this.props.socket.send(JSON.stringify({message: 'Hello Server!'}));
           }
         }} >Send message</button>
      </Fragment>
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
  },
  logOut: () => {
    dispatch(AuthActions.logOut());
  }
})
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);

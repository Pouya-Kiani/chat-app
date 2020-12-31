import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import './stylesheets/login-style.css'

import * as AuthActions from '../../store/actions/authActions'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault()
    if(this.props.socket) {
      this.props.socket.send(JSON.stringify({
        type: 'LOGIN',
        data: {
          username: this.state.username,
          password: this.state.password
        }
      }))
    }
  }
  handleChange({target}) {
    this.setState({
      [target.name]: target.value
    })
  }
  render() {
    return (
      <div className='page-wrapper'>
        <form onSubmit={this.handleFormSubmit} className="form-wrapper">
          <h3 className="form-header">Login</h3>
          <input 
            className="text-input" 
            type="text" 
            name="username" 
            id="username"
            placeholder="User Name"
            value={this.state.username}
            onChange={this.handleChange}/>
          <input 
            className="text-input" 
            type="password" 
            name="password" 
            id="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}/>
          <button className="form-submit">Login!</button>
          <br />
          <p>Don't have an account? <Link to='/signup'>Sign Up</Link>.</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    ...state.auth,
    ...state.chat
  })
}

const mapDispatchToProps = dispatch => ({
    Login: () => dispatch(AuthActions.Login())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
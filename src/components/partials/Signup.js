import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './stylesheets/login-style.css'

import * as AuthActions from '../../store/actions/authActions'
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      passwordConfirmation: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault()
    if(this.state.passwordConfirmation == this.state.password) {
      if(this.props.socket) {
        this.props.socket.send(JSON.stringify({
          type: 'SIGNUP',
          data: {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
          }
        }))
      }
    } else alert("passwords don't match")
    this.props.Signup()
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
          <h3 className="form-header">Sign Up</h3>
          <div class="form-row">
            <input 
              className="text-input" 
              type="text" 
              name="firstName" 
              id="first-name"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}/>
            <input 
              className="text-input" 
              type="text" 
              name="lastName" 
              id="last-name"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}/>
          </div>
          <div class="form-row">
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
              type="email" 
              name="email" 
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}/>
          </div>
          <div class="form-row">
            <input 
              className="text-input" 
              type="password" 
              name="password" 
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}/>
            <input 
              className="text-input" 
              type="password" 
              name="confirmPassword" 
              id="confirmPassword"
              placeholder="confirm Password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}/>
          </div>
          <button className="form-submit">Sign Up</button>
          <br />
          <p>Already have an account? <Link to='/login'>Log in</Link>.</p>
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
    Signup: () => dispatch(AuthActions.Signup())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './stylesheets/login-style.css'

import * as AuthActions from '../../store/actions/authActions'
class Login extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handleFormSubmit(values) {
    if(this.props.socket) {
      this.props.socket.send(JSON.stringify({
        type: 'LOGIN',
        data: {
          email: values.email,
          password: values.password
        }
      }))
    }
  }
  handleChange({target}) {
    this.setState({
      [target.name]: target.value
    })
  }

  LoginSchema = Yup.object().shape({
    email: Yup.string('Invalid username')
      .required('This field is required'),
    password: Yup.string('Invalid password')
      .required('This field is required')
  })

  render() {
    return (
      <div className='page-wrapper'>    
        <Formik 
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={this.LoginSchema}
          onSubmit={this.handleFormSubmit}
        >
          {({ errors, touched }) => (
          <Form className="form-wrapper">
            <h3 className="form-header">Login</h3>
            <div className="input-field">
              <Field 
                name="email"
                className={`text-input${errors.email && touched.email ? ' error' : ''}`}
                placeholder='E-mail'
              />
              {errors.email && touched.email ? <div className="error-message">{errors.email}</div> : null}
            </div>
            <div className="input-field">
              <Field 
                name="password"
                className={`text-input${errors.password && touched.password ? ' error' : ''}`}
                placeholder='password'
                type='password'
              />
              {errors.password && touched.password ? <div className="error-message">{errors.password}</div> : null}
            </div>
            <button 
              type="submit"
              className='form-submit'>
              Login
            </button>
            <br />
            <p>Don't have an account? <Link to='/signup'>Sign Up</Link>.</p>
          </Form>
          )}
        </Formik>
          
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
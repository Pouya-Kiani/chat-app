import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './stylesheets/login-style.css'

import * as AuthActions from '../../store/actions/authActions'
class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this) 
  }

  signUpValidationSchema = Yup.object().shape({
    firstName: Yup.string('Field contains invalid characters.')
      .max(20, 'Name too long!')
      .required('Please fill this field.'),
    lastName: Yup.string('Field contains invalid characters.')
      .max(20, 'Name too long!'),
    email: Yup.string('Field contains invalid characters.')
      .email('This E-mail is not valid')
      .required('Please fill this field.'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        "^[A-Za-z]{6,}$", 'Password is too weak!'),
    password2: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  handleFormSubmit(values) {
      if(this.props.socket) {
        this.props.socket.send(JSON.stringify({
          type: 'SIGNUP',
          data: {
            firstName: values.firstName,
            lastName: values.lastName,
            userName: values.userName,
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
  render() {
    return (
      <div className='page-wrapper'>
        <Formik 
          initialValues={{
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            password2: ''
          }}
          validationSchema={this.signUpValidationSchema}
          onSubmit={this.handleFormSubmit} 
          className="form-wrapper"
        >
          {({ errors, touched }) => ( 
            <Form className="form-wrapper" >
              <h3 className="form-header">Sign Up</h3>
              <div class="form-row">
                <div className="input-field">
                  <Field 
                    name="firstName"
                    className={`text-input${errors.firstName && touched.firstName ? ' error' : ''}`}
                    placeholder='First Name'
                  />
                  {errors.firstName && touched.firstName ? <div className="error-message">{errors.firstName}</div> : null}
                </div>
                <div className="input-field">
                  <Field 
                    name="lastName"
                    className={`text-input${errors.lastName && touched.lastName ? ' error' : ''}`}
                    placeholder='Last Name'
                  />
                  {errors.lastName && touched.lastName ? <div className="error-message">{errors.lastName}</div> : null}
                </div>
              </div>

              <div class="form-row">
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
                    name="userName"
                    className={`text-input${errors.userName && touched.userName ? ' error' : ''}`}
                    placeholder='User Name'
                  />
                  {errors.userName && touched.userName ? <div className="error-message">{errors.userName}</div> : null}
                </div>
              </div>

              <div class="form-row">
                <div className="input-field">
                  <Field 
                    name="password"
                    type="password"
                    className={`text-input${errors.password && touched.password ? ' error' : ''}`}
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? <div className="error-message">{errors.password}</div> : null}
                </div>
                <div className="input-field">
                  <Field 
                    name="password2"
                    type="password"
                    className={`text-input${errors.password2 && touched.password2 ? ' error' : ''}`}
                    placeholder="Confirm Password"
                  />
                  {errors.password2 && touched.password2 ? <div className="error-message">{errors.password2}</div> : null}
                </div>
              </div>
              <button 
                type="submit"
                className='form-submit'>
                Signup
              </button>
              <br />
              <p>Already have an account? <Link to='/login'>Log in</Link>.</p>
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
    Signup: () => dispatch(AuthActions.Signup())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
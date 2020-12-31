import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import Login from '../partials/Login';
import Signup from '../partials/Signup'
import * as AuthActions from '../../store/actions/authActions';

class Auth extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        {this.props.match.path === '/signup' ? 
          <Signup />
        :
          <Login />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.auth
  }
}
const mapDispatchToProps = dispatch =>({

});
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(withRouter(Auth));
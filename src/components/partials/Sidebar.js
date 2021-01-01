import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import '../assets/stylesheets/main-style.css'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className='thread-list'>
          <label className="thread-list-label" htmlFor="">messages</label>
          <li className="thread-short-view">
            <Link to='/thread' >
              <i className="zmdi zmdi-account-circle zmdi-hc-lg" />
              <h5>name</h5>
              <p>The last message</p>
            </Link>
          </li>
          <li className="thread-short-view">
            <Link to='/thread' >
              <i className="zmdi zmdi-account-circle zmdi-hc-lg" />
              <h5>name</h5>
              <p>The last message</p>
            </Link>
          </li>
          <li className="thread-short-view">
            <Link to='/thread' >
              <i className="zmdi zmdi-account-circle zmdi-hc-lg" />
              <h5>name</h5>
              <p>The last message</p>
            </Link>
          </li>
          <li className="thread-short-view">
            <Link to='/thread' >
              <i className="zmdi zmdi-account-circle zmdi-hc-lg" />
              <h5>name</h5>
              <p>The last message</p>
            </Link>
          </li>
          <li className="thread-short-view">
            <Link to='/thread' >
              <i className="zmdi zmdi-account-circle zmdi-hc-lg" />
              <h5>name</h5>
              <p>The last message</p>
            </Link>
          </li>
          <li className="thread-short-view">
            <Link to='/thread' >
              <i className="zmdi zmdi-account-circle zmdi-hc-lg" />
              <h5>name</h5>
              <p>The last message</p>
            </Link>
          </li>
          <li className="thread-short-view">
            <Link to='/thread' >
              <i className="zmdi zmdi-account-circle zmdi-hc-lg" />
              <h5>name</h5>
              <p>The last message</p>
            </Link>
          </li>
          <li className="thread-short-view">
            <Link to='/thread' >
              <i className="zmdi zmdi-account-circle zmdi-hc-lg" />
              <h5>name</h5>
              <p>The last message</p>
            </Link>
          </li>
          <li className="thread-short-view">
            <Link to='/thread' >
              <i className="zmdi zmdi-account-circle zmdi-hc-lg" />
              <h5>name</h5>
              <p>The last message</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  ;}
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
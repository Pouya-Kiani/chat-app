import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import * as ChatActions from '../../store/actions/chatActions'

import '../assets/stylesheets/main-style.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      someElse: 'some else'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSearch(ev) {
    ev.preventDefault()
    console.log('hello from handleSearch')
    this.props.search(this.state.search)
  }

  findOrCreateThread(id) {
    this.props.socket.send(JSON.stringify({
      type: 'FIND_THREAD',
      data: [this.props.user.id, id],
    }))
  }
  render() {
    return (
      <div className="sidebar">
        <div className="search-container">
          <input 
            type= "text"
            name= "search"
            id= "search-box"
            className= "search-input form-control"
            placeholder= "Search Active Users"
            value= {this.state.search}
            onChange= {this.handleChange}
          />
          <button 
            className="zmdi zmdi-search search-button"
            onClick={() => {

              this.props.search(this.state.search, this.props.socket)
            }} />
        </div>
        {this.state.search && this.props.users ? (
          <ul className='thread-list'>
            <label className="thread-list-label" htmlFor="">Search Results</label>
              {this.props.users.filter(u => u.id !== this.props.user.id).map((user, uid) => {
                return (
                  <li key={`user-${uid}`} className="thread-short-view">
                    <button
                      className="user-card" 
                      onClick={ev => {
                      ev.preventDefault();
                      this.findOrCreateThread(user.id)
                    }} >
                      <i className="zmdi zmdi-account-circle zmdi-hc-lg" />
                      <h5>{user.userName ? user.userName : 'unknown'}</h5>
                      <p>{user.email}</p>
                    </button>
                  </li>
                )
              })}
          </ul>
        ) : (
        <ul className='thread-list'>
          <label className="thread-list-label" htmlFor="">messages</label>
          {this.props.threads.map((thread, key) => (
            <li key={`thread_${key}`} className="thread-short-view">
              <Link to={`/${thread.id}`} >
                <i className="zmdi zmdi-account-circle zmdi-hc-lg" />
                <h5>{thread.id}</h5>
                <p>The last message</p>
              </Link>
            </li>  
          ))}
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
  )}
      </div>
    );
  ;}
};

const mapStateToProps = state => ({
  ...state.auth,
  ...state.chat
});

const mapDispatchToProps = dispatch => ({
  search: (key, socket) => dispatch(ChatActions.search(key, socket))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
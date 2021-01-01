import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import Sidebar from '../partials/Sidebar'
import ThreadView from '../partials/ThreadView'
import ChatInput from '../partials/ChatInput';

class Messenger extends Component {
  render() {
    return (
      <Fragment >
        <div className="">Messenger</div>
        <Sidebar />
        <ThreadView />
        <ChatInput />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  ...state.auth,
  ...state.chat
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Messenger));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class ThreadView extends Component {
  constructor(props) {
    super(props);
    this.init = this.init.bind(this);
  }

  componentDidMount() {
    this.init()
  }

  componentDidUpdate(oldProps) {
    if(oldProps.match.params.threadId !== this.props.match.params.threadId) {
      this.init()
    };
  };

  init() {
    let currentThread = this.props.threads.filter(
      t => t.id === this.props.match.params.threadId)[0];
    if(currentThread && (this.props.socket)) {
      let skip = currentThread.Messages || 0;
      console.log('socket: ', this.props.socket)
      this.props.socket.send(JSON.stringify({
        type: 'THREAD_LOAD',
        data: {
          threadId: this.props.match.params.threadId,
          skip
        },
      }));
    };
  };

  render() {
    return (
      <div className="main-view">Thread View</div>
    );
  };
};

const mapStateToProps = state => ({
  ...state.auth,
  ...state.chat,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ThreadView))
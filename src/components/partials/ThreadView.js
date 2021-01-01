import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class ThreadView extends Component {
  render() {
    return (
      <div className="main-view">Thread View</div>
    );
  };
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ThreadView))
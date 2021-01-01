import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class ChatInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}) {
    this.setState({
      ...this.state,
      [target.name]: target.value
    })
  }
  render() {
    return (
      <div className="input-view">
        <input 
          type="text" 
          className="form-control"
          name="content"
          id="content"
          placeholder="Write your message"
          value={this.state.value}
          onChange={this.handleChange} 
        />
      </div>
    );
  };
};

const mapStateToProps = state => ({
  ...state.auth,
  ...state.chat
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(withRouter(ChatInput));
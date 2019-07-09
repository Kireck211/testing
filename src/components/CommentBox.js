import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'actions';

class CommentBox extends Component {
  static propTypes = {
    saveComment: PropTypes.func.isRequired,
    fetchComments: PropTypes.func.isRequired,
  };

  state = { comment: '' };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { saveComment } = this.props;
    const { comment } = this.state;

    // Call an action creator
    saveComment(comment);

    this.setState({ comment: '' });
  };

  render() {
    const { comment } = this.state;
    const { fetchComments } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={comment} onChange={this.handleChange} />
          <div>
            <button type="submit">Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" type="button" onClick={fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);

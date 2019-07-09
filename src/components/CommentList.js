import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  renderComments() {
    const { comments } = this.props;
    return comments.map((comment, index) => <li key={index}>{comment}</li>);
  }

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentList);

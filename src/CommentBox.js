import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  getInitialState() {
    return {data: []};
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;

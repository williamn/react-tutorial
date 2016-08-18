import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import './index.css';

ReactDOM.render(
  <CommentBox url="http://localhost:3001/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);

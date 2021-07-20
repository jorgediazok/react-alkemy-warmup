import React from 'react';
import './Post.css';

const Post = ({ posts }) => {
  return <div>{posts.title}</div>;
};

export default Post;

import React from 'react';
import Image from '../../images/post.png';
import './Post.css';

const Post = ({ posts }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={Image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{posts.title}</h5>
        <a href="#" className="btn btn-primary">
          See More
        </a>
      </div>
    </div>
  );
};

export default Post;

import React from 'react';
import { Link } from 'react-router-dom';

//IMAGE
import Image from '../../images/post.png';

//ICONS
import { FiEdit2 } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';

//STYLES
import './Post.css';

const Post = ({ posts }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={Image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{posts.title}</h5>
        <div className="card-actions">
          <FiEdit2 className="card-edit" />
          <Link to="/details/:id">
            <button className="btn btn-primary card-button">Read More</button>
          </Link>
          <FaTrash className="card-delete" />
        </div>
      </div>
    </div>
  );
};

export default Post;

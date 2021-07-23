import React from 'react';
import { Link } from 'react-router-dom';

//IMAGE
import Image from '../../images/post.png';

//ICONS
import { FiEdit2 } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';

//STYLES
import './Post.css';

const Post = ({ post, remove }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={Image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <div className="card-actions">
          <Link to={`/edit/${post.id}`}>
            <FiEdit2 className="card-edit" />
          </Link>
          <Link to={`/details/${post.id}`}>
            <button className="btn btn-primary card-button">Read More</button>
          </Link>
          <FaTrash className="card-delete" onClick={() => remove(post.id)} />
        </div>
      </div>
    </div>
  );
};

export default Post;

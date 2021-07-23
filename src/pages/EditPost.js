import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

//COMPONENTS
import Navbar from '../components/Navbar/Navbar';

//STYLES
import '../styles/EditPost.css';

const EditPost = () => {
  //STATES
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  //ROUTING
  const history = useHistory();
  const location = useLocation();
  const id = location.pathname.split('/').pop();

  //GET POST
  const fetchPost = async (id) => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      ).then((response) => response.json());
      console.log(data);
      setTitle(data.title);
      setDescription(data.body);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  //UPDATE POSTS
  const updatePost = async (id) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title,
        description,
      });
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Edit Post</label>
            <textarea
              className="form-control"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-add"
            onClick={updatePost}>
            Edit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditPost;

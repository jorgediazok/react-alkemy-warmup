import axios from 'axios';

import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

//COMPONENTS
import Navbar from '../components/Navbar/Navbar';

//AUTH
import Auth from '../auth/Auth';

//STYLES
import '../styles/EditPost.css';

//TOAST
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//TOAST CONFIGURATION
toast.configure();

const EditPost = () => {
  //STATES
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  //ROUTING
  const history = useHistory();
  const location = useLocation();
  const id = location.pathname.split('/').pop();

  //TOAST FUNCTION
  const notify = () => {
    toast('Post Updated Succesfully', { position: toast.POSITION.TOP_RIGHT });
  };

  //GET POST
  const fetchPost = async (id) => {
    try {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setTitle(data.data.title);
      setDescription(data.data.body);
    } catch (error) {
      setError(true);
      setError('Something went', error.response.data.message);
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
      history.push('/');
      notify();
    } catch (error) {
      if (error && error.response) {
        setError('Something went', error.response.data.message);
      }
    }
  };

  return (
    <>
      <Auth>
        <Navbar />
        <div className="form-container">
          <form className="form">
            {error && error}
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
              type="button"
              className="btn btn-primary btn-add"
              onClick={() => updatePost(id)}>
              Edit
            </button>
          </form>
        </div>
      </Auth>
    </>
  );
};

export default EditPost;

import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

//COMPONENTS
import Navbar from '../components/Navbar/Navbar';

//STYLES
import '../styles/AddPost.css';

//TOAST
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//FORMIK
import { useFormik } from 'formik';
import * as yup from 'yup';

//TOAST CONFIGURATION
toast.configure();

//VALIDATIONS
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid Email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

const AddPost = () => {
  //STATES
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //TOAST FUNCTION
  const notify = () => {
    toast('Post Added Succesfully', { position: toast.POSITION.TOP_RIGHT });
  };

  //REDIRECTION
  const history = useHistory();

  //ADD POST
  const addPost = async (e) => {
    e.preventDefault();
    try {
      const newPost = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title,
          description,
        }
      );
      if (newPost) {
        setError(false);
        setPosts([...posts, newPost]);
        setTitle('');
        setDescription('');
        history.push('/');
        notify();
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <form className="form" onSubmit={addPost}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Title</label>
            <input
              type="text"
              value={title}
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Write a new Post
            </label>
            <textarea
              value={description}
              className="form-control"
              rows="5"
              onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-add">
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPost;

import axios from 'axios';

import { useState } from 'react';
import { useHistory } from 'react-router';

//COMPONENTS
import Navbar from '../components/Navbar/Navbar';

//AUTH
import Auth from '../auth/Auth';

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
  title: yup.string().required('Please enter a title.'),
  description: yup.string().required('Please enter a description.'),
});

const AddPost = () => {
  //STATES
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  //TOAST FUNCTION
  const notify = () => {
    toast('Post Added Succesfully', { position: toast.POSITION.TOP_RIGHT });
  };

  //REDIRECTION
  const history = useHistory();

  //ADD POST
  const onSubmit = async (values) => {
    const { ...data } = values;

    try {
      const newPost = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        data
      );
      if (newPost) {
        setError(false);
        setPosts([...posts, newPost]);
        formik.resetForm();
        history.push('/');
        notify();
      }
    } catch (error) {
      if (error && error.response) {
        console.log('Something Went Wrong', error.response.data.message);
        setError(true);
      }
    }
  };

  //FORMIK INITIAL VALUES

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <Auth>
        <Navbar />
        <div className="form-container">
          <form className="form" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              {error && <p>Something went wrong. Try again later.</p>}
              <label htmlFor="exampleFormControlInput1">Title</label>
              <input
                type="text"
                name="title"
                value={formik.values.title}
                onBlur={formik.handleBlur}
                className="form-control"
                onChange={formik.handleChange}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="form-error">{formik.errors.title}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Write a new Post
              </label>
              <textarea
                value={formik.values.description}
                onBlur={formik.handleBlur}
                name="description"
                className="form-control"
                rows="5"
                onChange={formik.handleChange}></textarea>
              {formik.touched.description && formik.errors.description ? (
                <div className="form-error">{formik.errors.description}</div>
              ) : null}
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-add"
              disabled={!formik.isValid}>
              Add Post
            </button>
          </form>
        </div>
      </Auth>
    </>
  );
};

export default AddPost;

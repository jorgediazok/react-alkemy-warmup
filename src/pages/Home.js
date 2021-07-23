import axios from 'axios';

import { useState, useEffect } from 'react';

//COMPONENTS
import Post from '../components/Post/Post';
import Navbar from '../components/Navbar/Navbar';

//AUTH - PROTECT ROUTES
import Auth from '../auth/Auth';

//TOAST MESSAGE
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//STYLES
import '../styles/Home.css';

//TOAST CONFIGURATION
toast.configure();

const Home = () => {
  //STATES
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  //TOAST FUNCTION
  const notify = () => {
    toast('Post Deleted', { position: toast.POSITION.TOP_RIGHT });
  };

  //GET POSTS
  const getPosts = async () => {
    try {
      const data = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(data.data);
    } catch (error) {
      setError('Something went wrong.', error.response.data.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  //DELETE POSTS
  const deletePost = async (id) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      if (response) {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
      }
      //TOASTY
      notify();
    } catch (error) {
      setError('Something went wrong.', error.response.data.message);
    }
  };

  return (
    <>
      <Auth>
        <Navbar />
        <div className="blog__container">
          <header>
            <h1>Your Daily Blog ✍ </h1>
          </header>
          {error && error}
          <div className="blog__left">
            {posts &&
              posts
                .map((post) => (
                  <Post post={post} key={post.id} remove={deletePost} />
                ))
                .slice(0, 10)}
          </div>
          <div className="blog__right">
            {posts &&
              posts
                .map((post) => (
                  <Post post={post} key={post.id} remove={deletePost} />
                ))
                .slice(11, 25)}
          </div>
        </div>
      </Auth>
    </>
  );
};

export default Home;

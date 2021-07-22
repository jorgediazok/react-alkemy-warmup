import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css';

//COMPONENTS
import Post from '../components/Post/Post';
import Navbar from '../components/Navbar/Navbar';

//AUTH
import Auth from '../auth/Auth';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  //GET POSTS
  const fetchPosts = async () => {
    try {
      const data = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      ).then((response) => response.json());
      console.log(data);
      setPosts(data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  //ADD POST
  const addPost = async () => {
    const data = await axios.post('https://jsonplaceholder.typicode.com/posts');
    try {
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  //UPDATE POSTS
  const updatePost = async (id) => {
    try {
      const data = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  //DELETE POSTS
  const deletePost = async (id) => {
    const data = axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    try {
    } catch (error) {
      setError(true);
      console.log(error);
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
          <div className="blog__left">
            {posts &&
              posts
                .map((post) => <Post posts={post} key={post.id} />)
                .slice(0, 10)}
          </div>
          <div className="blog__right">
            {posts &&
              posts
                .map((post) => <Post posts={post} key={post.id} />)
                .slice(11, 25)}
          </div>
        </div>
      </Auth>
    </>
  );
};

export default Home;

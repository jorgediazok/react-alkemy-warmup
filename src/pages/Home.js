import { useState, useEffect } from 'react';
import '../styles/Home.css';

//COMPONENTS
import Post from '../components/Post/Post';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  //GET POSTS
  const fetchData = async () => {
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
    fetchData();
  }, []);

  return (
    <div className="blog__container">
      <h1>Daily Blog</h1>
      <div className="blog__posts">
        {posts && posts.map((post) => <Post posts={post} key={post.id} />)}
      </div>
    </div>
  );
};

export default Home;

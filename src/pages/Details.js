import { useState, useEffect } from 'react';

//ROUTING
import { useLocation, Link } from 'react-router-dom';

//AUTH
import Auth from '../auth/Auth';

//COMPONENTS
import Navbar from '../components/Navbar/Navbar';

//STYLES
import '../styles/Details.css';

const Details = () => {
  //STATES
  const [post, setPost] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const id = location.pathname.split('/').pop();

  //GET POST
  const fetchPost = async (id) => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      ).then((response) => response.json());
      console.log(data);
      setPost(data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  return (
    <>
      <Auth>
        <Navbar />
        {error && <p>Something Happened. Please try again later.</p>}
        <div className="detail-container">
          <div className="card text-center">
            <div className="card-header">BLOG ARTICLE N° {post.id}</div>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <Link to="/" className="btn btn-primary">
                Back Home
              </Link>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
      </Auth>
    </>
  );
};

export default Details;

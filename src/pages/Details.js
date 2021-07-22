import React from 'react';

//AUTH
import Auth from '../auth/Auth';

//COMPONENTS
import Navbar from '../components/Navbar/Navbar';

//STYLES
import '../styles/Details.css';

const Details = () => {
  return (
    <>
      <Auth>
        <Navbar />
      </Auth>
    </>
  );
};

export default Details;

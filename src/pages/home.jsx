import React from 'react';

import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Posts from '../components/posts/post';
import Footer from '../components/footer/footer';
import '../assets/pages/home.css';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 

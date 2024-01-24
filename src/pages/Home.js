// pages/Home.js
import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/HomeStyles.css";
const Banner = "https://wallpapercave.com/wp/wp2329002.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Movies Catalog</h1>
          <p>Search your favorite movies</p>
        </div>
      </div>
      <div className="contentContainer">
        {/* Add other content sections as needed */}
      
        {/* Add more sections/components as needed */}
      </div>
    </Layout>
  );
};

export default Home;

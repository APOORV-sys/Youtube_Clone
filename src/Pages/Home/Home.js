import React from "react";
import Sidenavbar from "../../Components/Sidenavbar/sidenavbar";
import HomePage from "../../Components/HomePage/homePage";
import "./Home.css";

const Home = ({ sidenavbar }) => {
  return (
    <div className="home">
      <Sidenavbar isOpen={sidenavbar} />
      <HomePage />
    </div>
  );
};

export default Home;

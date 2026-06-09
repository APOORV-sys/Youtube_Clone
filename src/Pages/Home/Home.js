import React from "react";
import Sidenavbar from "../../Components/Sidenavbar/sidenavbar";
import HomePage from "../../Components/HomePage/homePage";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidenavbar />
      <HomePage />
    </div>
  );
};

export default Home;

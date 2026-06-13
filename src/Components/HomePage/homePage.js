import React from "react";
import "./homePage.css";
import thumbnailImage from "../../logo.svg";

const HomePage = ({ isOpen }) => {
  const options = [
    "all",
    "music",
    "gaming",
    "news",
    "sports",
    "movies",
    "fashion",
    "learning",
    "live",
    "music",
    "gaming",
    "news",
    "sports",
    "movies",
    "fashion",
    "learning",
    "live",
  ];
  const pageClassName = isOpen ? "homepage" : "fullHomePage";

  return (
    <div className={pageClassName}>
      <div className="homepage_options">
        {options.map((item, index) => {
          return (
            <div key={index} className="homepage_option">
              {item}
            </div>
          );
        })}
      </div>
      <div className="home_mainPage">
        <div className="youtube_video">
        
        </div>
      </div>
    </div>
  );
};

export default HomePage;

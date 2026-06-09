import React,{useState} from 'react'
import './navbar.css';
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const [userPic, setUserPic] = useState(
    "https://wallpapercave.com/avt/UnknownUser.png?v=4",
  );
  const[navbarModel,setNavbarModel] = useState(false);
  const handleClickModel = () => {setNavbarModel(prev => !prev)}; // Toggle the model visibility
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navhamburger">
          <MenuIcon sx={{ fontSize: "44px" }} />  
        </div>
        <div className="navlogo">
          <YouTubeIcon
            sx={{ color: "red", fontSize: "60px" }}
            className="youtube-icon"
          />
          <div className="navlogotext">YouTube</div>
        </div>
      </div>

      <div className="navbar-middle">
        <div className="navsearch">
          <input
            type="text"
            className="navbarsearchboxinput"
            placeholder="Search"
          />

          <div className="navsearchicon">
            <SearchIcon
              sx={{ color: "white", fontSize: "30px" }}
              className="SI"
            />
          </div>
          <div className="navmicicon">
            <MicOutlinedIcon
              sx={{ color: "white", fontSize: "30px" }}
              className="MI"
            />
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <AddIcon
          sx={{ color: "white", fontSize: "30px", cursor: "pointer" }}
          className="add"
        />
        <NotificationsNoneIcon
          sx={{ color: "white", fontsize: "30px", cursor: "pointer" }}
          className="Bell"
        />
        <img onClick={handleClickModel} src={userPic} className="pf" alt="logo" />
      
      {navbarModel && (
        <div className="navbar-model">
          <div className="navbar-model-option">Profile</div>
          <div className="navbar-model-option">Login</div>
          <div className="navbar-model-option">Logout</div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Navbar

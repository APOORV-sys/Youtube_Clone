import React from "react";
import "./sidenavbar.css";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WifiChannelIcon from "@mui/icons-material/WifiChannel";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import MissedVideoCallIcon from "@mui/icons-material/MissedVideoCall";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const Sidenavbar = ({ isOpen = true }) => {
  return (
    <div className={isOpen ? "home-sidenavbar" : "homeSidenavbar-hide"}>
      <div className="home__sideNavbarTop">
        {/* // Navbar k bhi teen part me divide kr rhe top middle bottom */}
        <div className={"home__sideNavbarTopOption"}>
          <HomeIcon />
          <div className={"home__sideNavbarTopOptionTitle"}>Home</div>
        </div>
        <div className={"home__sideNavbarTopOption"}>
          <VideocamIcon />
          <div className={"home__sideNavbarTopOptionTitle"}>Shorts</div>
        </div>
        <div className={"home__sideNavbarTopOption"}>
          <SubscriptionsIcon />
          <div className={"home__sideNavbarTopOptionTitle"}>Subscriptions</div>
        </div>
      </div>

      <div className="home__sideNavbarMiddle">
        <div className={"home__sideNavbarTopOption"}>
          <div className={"home__sideNavbarTopOptionTitle"}>You</div>
          <KeyboardArrowRightIcon />
        </div>
        <div className={"home__sideNavbarTopOption"}>
          <WifiChannelIcon />
          <div className={"home__sideNavbarTopOptionTitle"}>Your channel</div>
        </div>
        <div className={"home__sideNavbarTopOption"}>
          <HistoryIcon />
          <div className={"home__sideNavbarTopOptionTitle"}>History</div>
        </div>
        <div className={"home__sideNavbarTopOption"}>
          <PlaylistAddIcon />
          <div className={"home__sideNavbarTopOptionTitle"}>Playlist</div>
        </div>
        <div className={"home__sideNavbarTopOption"}>
          <MissedVideoCallIcon />
          <div className={"home__sideNavbarTopOptionTitle"}>Your Videos</div>
        </div>
        <div className={"home__sideNavbarTopOption"}>
          <WatchLaterIcon />
          <div className={"home__sideNavbarTopOptionTitle"}>Watch Later</div>
        </div>
        <div className={"home__sideNavbarTopOption"}>
          <FavoriteIcon />
          <div className={"home__sideNavbarTopOptionTitle"}>Liked Videos</div>
        </div>
        <div className={"home__sideNavbarTopOption"}>
          <IntegrationInstructionsIcon />
          <div className={"home__sideNavbarTopOptionTitle"}>Your Clips </div>
        </div>
      </div>

      <div className="home__sideNavbarBottom">
        <div className="home__sideNavbarTopOption">
          <div className="home__sideNavbarTopOptionTitle">Subscriptions</div>
        </div>

        <div className="home__sideNavbarBottomOption">
          <img
            className="home_sidenavbar_ImgLogo"
            src="https://s2.dmcdn.net/v/SjNzx1W3Wrws9okb9/x1080"
            alt="Aaj Tak"
          />
          <div className="home__sideNavbarTopOptionTitle">Aaj Tak</div>
        </div>

        <div className="home__sideNavbarBottomOption">
          <img
            className="home_sidenavbar_ImgLogo"
            src="https://s2.dmcdn.net/v/SjNzx1W3Wrws9okb9/x1080"
            alt="The Lallantop"
          />
          <div className="home__sideNavbarTopOptionTitle">The Lallantop</div>
        </div>
        <div className="home__sideNavbarBottomOption">
          <img
            className="home_sidenavbar_ImgLogo"
            src="https://s2.dmcdn.net/v/SjNzx1W3Wrws9okb9/x1080"
            alt="The Lallantop"
          />
          <div className="home__sideNavbarTopOptionTitle">Crazy XYZ</div>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;

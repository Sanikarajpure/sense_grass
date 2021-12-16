import React from "react";
import Navbar from "./components/nav";
import QuickAcess from "./components/quickAccess";
import FieldInfo from "./components/fieldInfo";
import CurrentWeather from "./components/currentWeather";
import ConnectedDevices from "./components/connectedDevice";
import AgroFeed from "./components/agroFeed";
import CropHealth from "./components/cropHealth";
import AgroMart from "./components/agroMart";
import "./home.css";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="Header">
        <Navbar />
      </div>
      <div className="homeBlock">
        <div className="homeContentContainer">
          <div className="homeContentLeftBlock">
            <div className="dashboardHeading">Dashboard</div>
            <div className="homeContentLeftContainer">
              <div className="fieldInfoContainer">
                <FieldInfo />
              </div>
              <div className="currentWeatherConnectedDevicesAgroFeedContainer">
                <div className="currentWeatherConnectedDevicesContainer">
                  <div className="currentWeatherContainer">
                    <CurrentWeather />
                  </div>
                  <div className="connectedDevicesAgroFeedMobileContainer">
                    <div className="connectedDevicesContainer">
                      <ConnectedDevices />
                    </div>
                    <div className="agroFeedMobileContainer">
                      <AgroFeed />
                    </div>
                  </div>
                </div>
                <div className="agroFeedContainer">
                  <AgroFeed />
                </div>
              </div>
            </div>
          </div>
          <div className="homeContentRightBlock">
            <div className="toolsAndAppsHeadingBlock">
              <div className="toolsHeadings">Tools & Apps</div>
              <div className="appsHeading">View App Store</div>
            </div>
            <div className="homeContentRightContainer">
              <div className="cropCalendarContainer">calendar</div>
              <div className="cropHealthAgroMartBlock">
                <div className="cropHealthContainer">
                  <CropHealth />
                </div>
                <div className="agroMartContainer">
                  <AgroMart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quickAccessBlock">
          <QuickAcess />
        </div>
      </div>
    </div>
  );
};

export default Home;

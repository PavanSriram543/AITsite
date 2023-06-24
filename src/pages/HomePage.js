import React from "react";
import Homecards from "../components/homecards/Homecards";
import RecentAdition from "../components/reacentAdition/RecentAdition";
import Carousel from "../components/slider/Carousel";
import TrendingCards from "../components/trendingcards/TrendingCards";
import "./homepage.scss";
function HomePage() {
  return (
    <div className="head">
      <Carousel />
      <Homecards />
      <TrendingCards />
      <RecentAdition />
    </div>
  );
}

export default HomePage;

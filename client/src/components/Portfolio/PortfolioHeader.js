import React from "react";
import "../../styles/portfolioHeader.css";
import * as SiIcons from "react-icons/si";

function PortfolioHeader() {
  return (
    <header id="portfolioHeader" className="portfolioHeader">
      <div id="_Clients" className="wrapper">
        <div className="background">
          <div className="overlay"></div>
          <img
            src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716592440/Eden_Files/Eden_Portfolio/Header/xmzma2ypoivvba3xyvmo.jpg"
            alt="portfolio header"
          />
        </div>
        <div className="text-content reveal">
          <p className="title">Our Portfolio</p>
          <p className="desc">
            Discover our diverse range of successful projects and solutions in
            our comprehensive portfolio. From home maintenance to innovative
            solutions, explore how we've made a difference for our clients.
          </p>
        </div>
      </div>
    </header>
  );
}

export default PortfolioHeader;

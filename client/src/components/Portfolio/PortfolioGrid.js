import React from "react";
import "../../styles/portfolioGrid.css";
import { Link } from "react-router-dom";

import * as GoIcons from "react-icons/go";
function PortfolioGrid() {
  return (
    <div id="portfolioGrid" className="portfolioGrid">
      <div id="_Works" className="wrapper">
        <div className="background"></div>
        <div className="grid-content">
          <p className="title">Our Achievements in Home Appliance Solutions</p>
          <p className="desc">
            Explore our work in home appliance maintenance, repair, and
            installation. Our dedicated team ensures every project is handled
            with precision and care, delivering reliable and efficient solutions
            for all your home appliance needs.
          </p>
          <div className="grid feature">
            <div className="coming-soon">
              <p className="main">Coming Soon!</p>
              <p className="sub">
                Get ready to explore our HVAC project showcase, highlighting
                exceptional installations and upgrades to enhance your comfort
                and efficiency!
              </p>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716592440/Eden_Files/Eden_Portfolio/Header/xmzma2ypoivvba3xyvmo.jpg"
                alt="grid item"
              />
              <div className="item-label">
                <div className="label">
                  <p>Refrigerator Efficiency Upgrade</p>
                  <p className="date">March 2023</p>
                </div>
                <Link
                  to={`/Portfolio/Showcase/Refrigerator Efficiency Upgrade`}
                >
                  <GoIcons.GoArrowUpLeft />
                </Link>
              </div>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716592440/Eden_Files/Eden_Portfolio/Header/xmzma2ypoivvba3xyvmo.jpg"
                alt="grid item"
              />
              <div className="item-label">
                <div className="label">
                  <p>Refrigerator Efficiency Upgrade</p>
                  <p className="date">March 2023</p>
                </div>
                <Link
                  to={`/Portfolio/Showcase/Refrigerator Efficiency Upgrade`}
                >
                  <GoIcons.GoArrowUpLeft />
                </Link>
              </div>
            </div>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716592440/Eden_Files/Eden_Portfolio/Header/xmzma2ypoivvba3xyvmo.jpg"
                alt="grid item"
              />
              <div className="item-label">
                <div className="label">
                  <p>Refrigerator Efficiency Upgrade</p>
                  <p className="date">March 2023</p>
                </div>
                <Link
                  to={`/Portfolio/Showcase/Refrigerator Efficiency Upgrade`}
                >
                  <GoIcons.GoArrowUpLeft />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioGrid;

import React from "react";
import "../../styles/aboutUsHeader.css";

import * as FiIcons from "react-icons/fi";

function AboutUsHeader() {
  return (
    <header id="aboutUsHeader" className="aboutUsHeader">
      <div className="wrapper">
        <div className="background">
          <div className="overlay"></div>
          <img
            src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716677808/Eden_Files/Eden_About/xwmkxdzyjhqbqt0cs52w.webp"
            alt="header background"
          />
        </div>

        <div className="header-content reveal">
          <p className="title">About Us</p>
          <p className="desc">
            Welcome to EDEN Home Solution, your trusted partner in home
            maintenance and appliance care. We ensure your home stays
            comfortable and efficient with our top-quality services. Your home’s
            well-being is our priority.
          </p>
          <div className="contact-info">
            <div className="icon">
              <FiIcons.FiPhone />
            </div>
            <div className="info">
              <p>866-847-7972</p>
              <p>Call Us Anytime</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AboutUsHeader;

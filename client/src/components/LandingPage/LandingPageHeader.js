import React from "react";
import "../../styles/landingPageHeader.css";

function LandingPageHeader() {
  return (
    <header id="landingPageHeader" className="landingPageHeader">
      <div className="wrapper">
        <div className="background">
          <div className="overlay"></div>
          <div className="image">
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716425918/Eden_Files/Eden_LandingPage/b30jm4byocmpvivejtxb.webp"
              }
              alt="Feader Background"
            />
          </div>
        </div>
        <div className="header-text">
          <p className="main-text reveal">“We Enhance America”</p>
          <div className="sub-text reveal" style={{ animationDelay: "0.2s" }}>
            Home Solution
          </div>
        </div>
      </div>
    </header>
  );
}

export default LandingPageHeader;

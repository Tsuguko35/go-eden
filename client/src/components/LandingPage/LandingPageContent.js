import React, { useState } from "react";
import "../../styles/landingPageContent.css";

import LoadingDot from "../../assets/svg/LoadingDot";

import { Link, useNavigate } from "react-router-dom";
import InnovationCarousel from "../reusable/InnovationCarousel";
import MembersCarousel from "../reusable/MembersCarousel";
import MapComponent from "../reusable/MapComponent";
import MiniPortfolioCarousel from "../reusable/MiniPortfolioCarousel";
import axios from "axios";

function LandingPageContent() {
  const navigate = useNavigate();
  const [zipCode, setZipCode] = useState(null);
  const [submit, setSubmit] = useState(false);

  const redirectToQuote = (details) => {
    navigate("/Services", { state: details });
  };

  const handlelookUp = async () => {
    if (!zipCode) {
      return;
    }

    try {
      const response = await axios.get(
        `http://api.zippopotam.us/us/${zipCode}`
      );
      if (response.data.places && response.data.places.length > 0) {
        const zip_location = response.data.places[0];
        const details = {
          city: zip_location["place name"],
          state: zip_location["state"],
          postal_code: zipCode,
        };

        redirectToQuote(details);
      }
    } catch (error) {
      console.log("Error fetching data. Please try again.");
    }
  };

  const visual_1 =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716428239/Eden_Files/Eden_LandingPage/agzzla8jqwtlimvcks6e.webp";
  const visual_2 =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716428239/Eden_Files/Eden_LandingPage/i6qf0fdzdlbsd4mqhy7n.webp";
  const visual_3 =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716428239/Eden_Files/Eden_LandingPage/huq11dgbm3pdrukqoapm.webp";

  const findLocation = (e) => {
    e.preventDefault();
    handlelookUp();
    setSubmit(true);
  };
  return (
    <div id="landingPageContent" className="landingPageContent">
      <div className="wrapper">
        <div className="company-details withPadding feature">
          <div className="details">
            <p className="label">Who we are as a company</p>
            <p className="title">EDEN as a Company</p>
            <p className="description">
              Eden extends company’s mission by helping homeowners significantly
              reduce energy consumption. We provide cutting-edge services such
              as advanced residential HVAC systems, comprehensive insulation
              solutions, and rage of energy saving packages.
            </p>
            <div className="action">
              <Link to={"/About"}>MORE ABOUT US</Link>
            </div>
          </div>
          <div className="image">
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1718924827/Eden_Files/Eden_LandingPage/jo7pootueejaxuiqa9k8.webp"
              }
              alt="Details Visual"
            />
          </div>
        </div>
        <div className="innovations">
          <div className="container feature">
            <div className="carousel">
              <InnovationCarousel />
            </div>
            <div className="innovations-text">
              <p className="label">Spotlight on Excellence</p>
              <p className="title">Why Energy Efficiency?</p>
              <p className="description">
                Because it benefits everyone, regardless of their circumstances,
                and particularly in today ' s economic climate.
              </p>
              <div className="description">
                Major Components of Efficiency:
                <ul>
                  <li>HVAC Controls</li>
                  <li>HVAC Maintenance</li>
                  <li>Home Energy Monitoring</li>
                  <li>Duct Sealing</li>
                  <li>Insulation</li>
                  <li>Certification</li>
                  <li>Finance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="line-details">
          <div className="lines">
            <span className="secondary move-line-secondary"></span>
            <span className="dark move-line-dark"></span>
          </div>
        </div>

        {/* Member Carousel */}
        <MembersCarousel />

        <div className="line-details">
          <div className="lines left">
            <span className="dark move-line-dark"></span>
            <span className="secondary move-line-secondary"></span>
          </div>
        </div>

        <div className="visuals-container">
          <div className="container feature">
            <div className="title">
              Embodied Excellence: Our Commitments in Action
            </div>
            <div className="visuals">
              <div className="visual">
                <img src={visual_1} alt="" />
                <p className="label">Fast Work</p>
              </div>
              <div className="visual">
                <img src={visual_2} alt="" />
                <p className="label">Excellent Performance</p>
              </div>
              <div className="visual">
                <img src={visual_3} alt="" />
                <p className="label">Can work everywhere</p>
              </div>
            </div>
          </div>
        </div>

        <div className="quote-container feature">
          <div className="title">Get Your Personalized Quote Today!</div>
          <div className="desc">
            Get competitive prices for your project or product by requesting a
            quick quotation today!
          </div>
          <div className="action">
            <Link to={"/Services"}>REQUEST FOR QUOTATION</Link>
          </div>
        </div>

        <div className="google-map feature">
          <div className="map">
            <div className="map-container">
              <MapComponent
              // zipCode={zipCode}
              // submit={submit}
              // setSubmit={setSubmit}
              />
            </div>
          </div>
          <div className="input-container">
            <p className="title">LET US KNOW WHERE YOU AT!</p>
            <p className="desc">
              Help us serve you better by providing your current location.
              Simply let us know where you are, and we'll tailor our services to
              meet your needs right where you are.
            </p>
            <form onSubmit={findLocation} className="input-group">
              <input
                type="text"
                required
                placeholder="Enter ZIP Code(USA only)"
                onChange={(e) => setZipCode(e.target.value)}
                disabled={submit}
              />
              <button type="submit" disabled={submit}>
                {submit ? <LoadingDot width={40} height={40} /> : "Locate"}
              </button>
            </form>
          </div>
        </div>

        <div className="line-details">
          <div className="lines left">
            <span className="dark move-line-dark"></span>
            <span className="secondary move-line-secondary"></span>
          </div>
        </div>

        <div className="company-details withPadding feature">
          <div className="details">
            <p className="label">Our Portfolio Showcase</p>
            <p className="title">Discover Excellence: Our Portfolio Unveiled</p>
            <p className="description">
              Embark on a journey of discovery as we unveil our portfolio of
              excellence. Explore a curated collection showcasing our finest
              achievements, innovative projects, and expertise, designed to
              inspire and captivate.
            </p>
            <div className="action">
              <Link to={"/Portfolio"}>SHOW MORE</Link>
            </div>
          </div>
          <div className="image carousel">
            <MiniPortfolioCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageContent;

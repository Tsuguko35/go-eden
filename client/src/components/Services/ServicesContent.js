import React, { useState } from "react";
import "../../styles/servicesContent.css";

import { Link } from "react-router-dom";

import CircleMemberCarousel from "../reusable/CircleMemberCarousel";
import ClientReviewsMini from "../reusable/ClientReviewsMini";
import ProductDialog from "../reusable/ProductDialog";

function ServicesContent() {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(null);

  const openServices = (service) => {
    setShow(true);
    setProduct(service);
  };

  return (
    <div id="servicesContent" className="servicesContent">
      {/* Dialog */}
      <ProductDialog show={show} setShow={setShow} product={product} />

      {/* Main */}
      <div className="wrapper">
        <div className="products-showcase">
          <div className="background">
            <div className="overlay"></div>
            <img
              src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716439379/Eden_Files/Eden_Services/yq29kluniz2pbgvkvmsm.webp"
              alt="product background"
            />
          </div>
          <div id="_ServiceCategory" className="product-showcase-content">
            <p className="title">“Modern Problem Needs Modern Solution”</p>

            <div className="product-introduction feature">
              <div className="title">
                <p className="main">PRODUCT & SERVICES</p>
                <p className="sub">
                  We offer a range of packages to choose from
                </p>
              </div>

              <div className="service-details">
                <div className="detail">
                  <div className="icon">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718925457/Eden_Files/Eden_Services/Icons/y2rzpdqfa3yhhokry1r1.webp"
                      alt=""
                    />
                    <p className="title">Eden Essentials</p>
                  </div>
                  <div className="bullets">
                    <ul>
                      <li>Variable Fan Timing</li>
                      <li>Intelligent Compressor Cycling</li>
                      <li>Variable Fan Speed</li>
                      <li>Full System Diagnosis</li>
                      <li>Increase in Home Value of 5%</li>
                      <li>Guaranteed 15-20% Offset in Energy</li>
                      <li>Lifetime Warranties on Prime and APC</li>
                    </ul>
                  </div>
                </div>
                <div className="detail">
                  <div className="icon">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718925457/Eden_Files/Eden_Services/Icons/ou9wzgsj5xgruz4t83ph.webp"
                      alt=""
                    />
                    <p className="title">Eden Pro</p>
                  </div>
                  <div className="bullets">
                    <ul>
                      <li>Variable Fan Timing</li>
                      <li>Intelligent Compressor Cycling</li>
                      <li>Variable Fan Speed</li>
                      <li>Full System Diagnosis</li>
                      <li>Increase in Home Value of 5%</li>
                      <li>Guaranteed 15-20% Offset in Energy</li>
                      <li>Lifetime Warranties on Prime and APC</li>
                      <li>Anti-Oil Fouling</li>
                      <li>Whole Home Energy Monitoring</li>
                    </ul>
                  </div>
                </div>
                <div className="detail">
                  <div className="icon">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718925457/Eden_Files/Eden_Services/Icons/ahvn8gjbrcmnp6nghnqx.webp"
                      alt=""
                    />
                    <p className="title">Eden Elite</p>
                  </div>
                  <div className="bullets">
                    <ul>
                      <li>Variable Fan Timing</li>
                      <li>Intelligent Compressor Cycling</li>
                      <li>Variable Fan Speed</li>
                      <li>Full System Diagnosis</li>
                      <li>Increase in Home Value of 5%</li>
                      <li>Guaranteed 23-35% Offset in Energy</li>
                      <li>Anti-Oil Fouling</li>
                      <li>Whole Home Energy Monitoring</li>
                      <li>Seal Ductwork</li>
                      <li>Indoor Air Quality</li>
                    </ul>
                  </div>
                </div>
                <div className="detail">
                  <div className="icon">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718925457/Eden_Files/Eden_Services/Icons/xjlcpu3taxgk1xovxqxz.webp"
                      alt=""
                    />
                    <p className="title">Eden Power</p>
                  </div>
                  <div className="bullets">
                    <ul>
                      <li>Variable Fan Timing</li>
                      <li>Intelligent Compressor Cycling</li>
                      <li>Variable Fan Speed</li>
                      <li>Full System Diagnosis</li>
                      <li>Increase in Home Value of 5%</li>
                      <li>Guaranteed 23-35% Offset in Energy</li>
                      <li>Anti-Oil Fouling and System Protection</li>
                      <li>Lifetime Warranties on Prime, APC, and SynCat360</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-grid feature">
              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">15-20%</div>
                      <div className="sub">Total blended energy offset</div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719357835/Eden_Files/Eden_Services/Icons/ll3ehomeeiyjqwwubmvy.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Level 1 Package ESSENTIALS</p>
                    <p className="desc">
                      insulation that is installed by blowing it into attics,
                      walls, and other cavities. It is made of tiny particles of
                    </p>
                    <button onClick={() => openServices("Essentials")}>
                      View Service
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">20-25%</div>
                      <div className="sub">Total blended energy offset</div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719357835/Eden_Files/Eden_Services/Icons/f859cmerrvw80qbonwev.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Level 2 Package PRO</p>
                    <p className="desc">
                      LED's are far more energy-efficient than traditional
                      incandescent bulbs and fluorescent bulbs
                    </p>
                    <button onClick={() => openServices("Pro")}>
                      View Service
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">25-35%</div>
                      <div className="sub">Total blended energy offset</div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719357836/Eden_Files/Eden_Services/Icons/hujsg1qqvxhlsktf7w48.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Level 3 Package ELITE</p>
                    <p className="desc">
                      UVC light technology offers a proven weapon in the fight
                      against germs. Our UVC Disinfection Solutions
                    </p>
                    <button onClick={() => openServices("Elite")}>
                      View Service
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">20-25%</div>
                      <div className="sub">Total blended energy offset</div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719357836/Eden_Files/Eden_Services/Icons/ekjqa67shduh4evy832p.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">POWER PACK</p>
                    <p className="desc">
                      Ecostella is a device designed to improve the efficiency
                      of your existing HVAC system, specifically
                    </p>
                    <button onClick={() => openServices("Power")}>
                      View Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Member Carousel */}
        {/* <CircleMemberCarousel /> */}

        <div id="_ClientReviews" className="client-reviews feature">
          <div className="client-reviews-container">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716503418/Eden_Files/Eden_Services/istjpnac5xeyamrdqpmw.webp"
                alt="client-visual"
              />
            </div>
            <div className="details-container">
              <div className="text-content">
                <p className="label">Our Portfolio</p>
                <p className="title">Learn from our Clients</p>
                <p className="desc">
                  Discover how our home maintenance solutions have made a
                  difference. Hear directly from our satisfied clients about
                  their experiences and the results they've achieved with our
                  services.
                </p>
                <Link to={"/Portfolio"}>View More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesContent;

import React from "react";
import "../../styles/becomeADealerContent.css";
import DealerTestimonyCarousel from "../reusable/DealerTestimonyCarousel";
import BecomeDealerForm from "../reusable/BecomeDealerForm";
import { useNavigate } from "react-router-dom";

function BecomeADealerContent() {
  const navigate = useNavigate();
  return (
    <div id="becomeADealerContent" className="becomeADealerContent">
      <header>
        <div className="background">
          <img
            src="https://www.movinghomemadeeasy.com/wp-content/uploads/2023/03/couple-packing-boxes-for-house-move-scaled-2560x1280.jpg"
            alt=""
          />
        </div>
        <div className="text-content reveal">
          <p className="title">Become Our Dealer</p>
          <p className="desc">
            Whether you have a question, need assistance, or want to provide
            feedback, our team is ready to help. Reach out to us and we'll get
            back to you as soon as possible.
          </p>
          <button onClick={() => navigate("/BecomeADealer#_DealerForm")}>
            Start Dealership
          </button>
        </div>
      </header>
      <div className="wrapper">
        <div className="offset">
          <p className="label reveal" style={{ animationDelay: "0.5s" }}>
            WHAT YOU'LL GAIN BY PARTNERING WITH US
          </p>
          <div className="cards reveal" style={{ animationDelay: "0.5s" }}>
            <div className="card">
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718155932/Eden_Files/Eden_BecomeDealer/a8u9myi8jwimkhm9vo1k.webp"
                  alt=""
                />
              </div>
              <div className="text-content">
                <p className="title">BOOST PROFITS & SELL FASTER</p>
                <p className="desc">
                  COMBINE INCREASED PROFIT MARGINS WITH THE EASE OF SELLING
                  IN-DEMAND PRODUCTS.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718155932/Eden_Files/Eden_BecomeDealer/gias8el8dneknxyviomj.webp"
                  alt=""
                />
              </div>
              <div className="text-content">
                <p className="title">EXCLUSIVE SUPPORT & GROWTH</p>
                <p className="desc">
                  HIGHLIGHT THE UNIQUE SUPPORT AND RESOURCES YOU OFFER ALONGSIDE
                  THE POTENTIAL FOR BUSINESS GROWTH.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718155932/Eden_Files/Eden_BecomeDealer/do99j1inpslmrohu8gcy.webp"
                  alt=""
                />
              </div>
              <div className="text-content">
                <p className="title">BUILD YOUR BRAND WITH OURS</p>
                <p className="desc">
                  HIGHLIGHTS THE COLLABORATIVE NATURE AND INCREASED MARKET
                  EXPOSURE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="company-offer">
        <div className="wrapper feature">
          <div className="text-content">
            <div className="header">
              <p className="label">What We Offer</p>
              <p className="title">Unmatched Support for Your Success:</p>
              <p className="label">
                At EDEN, we're committed to your success as a dealer. We offer a
                comprehensive support system designed to empower you to thrive.
                Here's what you can expect:
              </p>
            </div>
            <div className="bullets">
              <ul>
                <li>
                  <span className="highlight">Dedicated Account Manager: </span>
                  You'll have a dedicated point of contact within our team to
                  provide personalized support, answer questions, and help you
                  navigate the program.
                </li>
                <li>
                  <span className="highlight">
                    Comprehensive Training Programs:{" "}
                  </span>
                  Gain in-depth knowledge of our products, sales strategies, and
                  industry best practices through our training programs and
                  ongoing educational resources.
                </li>
                <li>
                  <span className="highlight">Marketing and Sales Tools: </span>
                  We equip you with a variety of marketing
                  materials, co-operative advertising opportunities, and a
                  user-friendly dealer portal to streamline your sales efforts
                  and maximize your reach.
                </li>
                <li>
                  <span className="highlight">
                    Inventory Management and Support:{" "}
                  </span>
                  Benefit from a user-friendly online platform for
                  ordering, tracking inventory, and accessing product
                  information. Our dedicated team is also available to assist
                  with inventory management needs.
                </li>
                <li>
                  <span className="highlight">
                    Ongoing Communication and Support:{" "}
                  </span>
                  We believe in open communication and fostering a strong
                  partnership. You'll have access to regular communication
                  channels, dealer events, and ongoing support to ensure your
                  success.
                </li>
              </ul>
            </div>
          </div>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <DealerTestimonyCarousel />
      </div>

      <div id="_DealerForm" className="wrapper">
        <div className="form-container">
          <BecomeDealerForm />
        </div>
      </div>
    </div>
  );
}

export default BecomeADealerContent;

import React from "react";
import * as Io5Icons from "react-icons/io5";
import "../../styles/servicesHeader.css";
import QuoteForm from "../reusable/QuoteForm";

function ServicesHeader() {
  return (
    <header id="servicesHeader" className="servicesHeader">
      <div id="_getQuote" className="wrapper">
        <div className="background">
          <div className="overlay"></div>
          <img
            src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716430379/Eden_Files/Eden_Services/j0l54xcnsf5vokwacp2v.webp"
            alt="Serices Background"
          />
        </div>
        <div className="header-content">
          <div className="text-content">
            <div className="services reveal">
              <p className="title">Our Services</p>
              <p className="desc">
                Discover expert home maintenance and appliance services tailored
                to your needs. From routine upkeep to emergency repairs, our
                skilled technicians ensure your home runs smoothly and
                efficiently. Trust us to keep your appliances in top condition
                and your space comfortable and functional, so you can focus on
                what matters most.
              </p>
              <div className="details">
                <div className="detail">
                  <p className="label">20+</p>
                  <p className="desc">Years of experience</p>
                </div>
                <div className="detail">
                  <p className="label">150+</p>
                  <p className="desc">Homes We Proudly Serve</p>
                </div>
                <div className="detail">
                  <p className="label">10k+</p>
                  <p className="desc">Projects Done</p>
                </div>
              </div>
            </div>
            <div
              id="_Return"
              className="list reveal"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="title">What you’ll get in return</p>
              <div className="list-container">
                <div className="item">
                  <Io5Icons.IoCheckmarkOutline />
                  <p>
                    Expert Service: Our experienced professionals deliver
                    top-notch home maintenance and repair services.
                  </p>
                </div>
                <div className="item">
                  <Io5Icons.IoCheckmarkOutline />
                  <p>
                    Transparent Pricing: Detailed and honest quotes with no
                    hidden fees.
                  </p>
                </div>
                <div className="item">
                  <Io5Icons.IoCheckmarkOutline />
                  <p>
                    Quality Assurance: High-quality workmanship guaranteed on
                    all jobs.
                  </p>
                </div>
                <div className="item">
                  <Io5Icons.IoCheckmarkOutline />
                  <p>
                    Prompt Response: Quick turnaround times for consultations
                    and service delivery.
                  </p>
                </div>
                <div className="item">
                  <Io5Icons.IoCheckmarkOutline />
                  <p>
                    Customer Support: Ongoing support and advice even after the
                    job is done.
                  </p>
                </div>
                <div className="item">
                  <Io5Icons.IoCheckmarkOutline />
                  <p>
                    Peace of Mind: Reliable solutions that ensure the safety and
                    comfort of your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <QuoteForm />
          </div>
        </div>
      </div>
    </header>
  );
}

export default ServicesHeader;

import React from "react";
import "../../styles/portfolioContent.css";
import PortfolioGrid from "./PortfolioGrid";

function PortfolioContent() {
  return (
    <div id="portfolioContent" className="portfolioContent">
      <div className="wrapper">
        <div className="posts ignore-scroll feature">
          <p className="title">Facebook Posts</p>
          <iframe
            src="https://widget.tagembed.com/154766?view"
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            frameborder="0"
            allowtransparency="true"
          ></iframe>
        </div>
      </div>

      {/* Grid */}
      <PortfolioGrid />

      <div className="wrapper">
        <div id="_Statistics" className="achievements feature">
          <p className="title">
            Exceptional User Experience: Our Statistic Showcase
          </p>
          <p className="desc">
            Explore our commitment to excellence through real data. Our
            statistics highlight the exceptional user experience enjoyed by our
            clients, showcasing our dedication to quality in every service.
          </p>
          <div className="skills-grid">
            <div className="skill">
              <span className="skill-name">Service Quality</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "92%" }}></div>
                </div>
                <span className="percentage">92%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Customer Satisfaction</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "98%" }}></div>
                </div>
                <span className="percentage">98%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Service Response Time</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "94%" }}></div>
                </div>
                <span className="percentage">94%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Technical Expertise</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "95%" }}></div>
                </div>
                <span className="percentage">95%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Safety Standards</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "100%" }}></div>
                </div>
                <span className="percentage">100%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Service Reliability</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "100%" }}></div>
                </div>
                <span className="percentage">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioContent;

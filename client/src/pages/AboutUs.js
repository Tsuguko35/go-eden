import React, { useEffect } from "react";
import { AboutUsContent, AboutUsHeader, Footer } from "../components";

function AboutUs() {
  useEffect(() => {
    document.title = "Eden | About Us";
  }, []);
  return (
    <div id="aboutUs" className="aboutUs">
      {/* Header */}
      <AboutUsHeader />

      {/* Content */}
      <AboutUsContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutUs;

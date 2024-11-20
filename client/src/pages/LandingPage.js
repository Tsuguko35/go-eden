import React, { useEffect } from "react";
import { Footer, LandingPageContent, LandingPageHeader } from "../components";

function LandingPage() {
  useEffect(() => {
    document.title = "Eden | Home";
  }, []);
  return (
    <div id="landingPage" className="landingPage">
      {/* Header */}
      <LandingPageHeader />

      {/* Content */}
      <LandingPageContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;

import React, { useEffect } from "react";
import { Footer, PortfolioShowcaseContent } from "../components";

function PortfolioShowcase() {
  useEffect(() => {
    document.title = "Eden | Portfolio";
  }, []);
  return (
    <div id="portfolioShowcase" className="portfolioShowcase">
      {/* Content */}
      <PortfolioShowcaseContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default PortfolioShowcase;

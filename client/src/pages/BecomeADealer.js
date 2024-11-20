import React, { useEffect } from "react";
import { BecomeADealerContent, Footer } from "../components";

function BecomeADealer() {
  useEffect(() => {
    document.title = "Eden | Become A Dealer";
  }, []);
  return (
    <div id="becomeADealer" className="becomeADealer">
      {/* Content */}
      <BecomeADealerContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BecomeADealer;

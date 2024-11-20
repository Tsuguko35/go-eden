import React, { useEffect } from "react";
import { ContactUsContent, Footer } from "../components";

function ContactUs() {
  useEffect(() => {
    document.title = "Eden | Contact Us";
  }, []);
  return (
    <div id="contactuUs" className="contactuUs">
      {/* Content  */}
      <ContactUsContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ContactUs;

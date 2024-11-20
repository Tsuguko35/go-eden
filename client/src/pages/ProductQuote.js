import React from "react";
import { Footer, ProductQuoteContent } from "../components";

function ProductQuote() {
  return (
    <div id="productQuote" className="productQuote">
      {/* Content */}
      <ProductQuoteContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProductQuote;

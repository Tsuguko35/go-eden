import React from "react";
import { Footer } from "../components";
import ProductShowcaseContent from "../components/Products/ProductShowcaseContent";

function ProductShowcase() {
  return (
    <div id="productShowcase" className="productShowcase">
      {/* Content */}
      <ProductShowcaseContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProductShowcase;

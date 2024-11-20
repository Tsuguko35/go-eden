import React from "react";
import { Footer, ProductsContent } from "../components";

function Products() {
  return (
    <div id="products" className="products">
      {/* Content */}
      <ProductsContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Products;

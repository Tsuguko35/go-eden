import React, { useEffect, useRef, useState } from "react";
import "../../styles/productDialog.css";
import "locomotive-scroll/locomotive-scroll.css";

import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { packages } from "../../utils";

function ProductDialog({ show, setShow, product }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const filtered_product = packages.find((packages) => packages.id === product);
  useEffect(() => {
    if (isOpen) {
      function handleClickOutside(event) {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target)
        ) {
          console.log(true);
          setShow(false);
        }
      }

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return (
    <div id="productDialog" className={`productDialog ${show ? "show" : ""}`}>
      {filtered_product && (
        <div ref={containerRef} className="container">
          <img
            src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716425911/Eden_Files/l9uixhlxzufl2d6bmcbk.webp"
            alt=""
            className="logo"
          />
          <div className="background">
            <img
              src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719360549/Eden_Files/knmhva0vi8wqjcgtb3ws.webp"
              alt=""
            />
          </div>

          <header className="header">
            <div className="title">
              <p className="label">{filtered_product.level}</p>
              <p className="main">{filtered_product.package_name}</p>
              <p className="label">
                Total Blended Energy Offset: {filtered_product.energy_offset}
              </p>
            </div>
            <div className="action">
              <IoMdClose onClick={() => setShow(false)} />
            </div>
          </header>
          <div className="content ignore-scroll">
            <div className="service-details">
              {filtered_product.included_package.map((packages) => (
                <div className="included-package">
                  <p className="label">{packages.indicator}</p>
                  <div className="details">
                    <p className="title">{packages.title}</p>
                    <p className="label">{packages.label}</p>
                    <ul>
                      {packages.features.map((feature) => (
                        <li>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <img
              src={filtered_product.package_image}
              alt=""
              className="package-image"
            />
          </div>
          <footer>
            <Link onClick={() => setShow(false)} to={"/Services#_getQuote"}>
              Get Quotation
            </Link>
            <div className="certification">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719011780/Eden_Files/Eden_Services/wfajmbzfnbbywdjswyk3.webp"
                alt=""
              />
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default ProductDialog;

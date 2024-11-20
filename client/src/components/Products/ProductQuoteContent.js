import React, { useContext, useEffect } from "react";
import "../../styles/productQuoteContent.css";
import { ServicesQuotation } from "../../context";
import { services } from "../../utils";
import { IoMdClose } from "react-icons/io";
import ProductQuoteForm from "../reusable/productQuoteForm";
import { useNavigate } from "react-router-dom";

function ProductQuoteContent() {
  const navigate = useNavigate();
  const { quotedServices, setQuotedServices } = useContext(ServicesQuotation);
  const services_list = services;

  const removeProduct = (product) => {
    const products = quotedServices.filter((services) => services !== product);
    console.log(products, quotedServices, product);
    setQuotedServices(products);
  };

  useEffect(() => {
    if (quotedServices.length < 1) {
      navigate("/Services/Products");
    }
  }, [quotedServices]);
  return (
    <div id="productQuoteContent" className="productQuoteContent">
      <div className="wrapper">
        <header>
          <p className="title">Request for Quotation</p>
          <p className="desc">
            Need an estimate for your home maintenance or repair project? Fill
            out the form below with details of the services you require, and
            we'll provide you with a comprehensive quote promptly.
          </p>
          <p className="product-count">
            <span className="count">{quotedServices.length} </span>of our
            services you add for quotation
          </p>
        </header>

        <div className="quote-checkout" data-scroll-section>
          <div data-scroll-section className="product-list ignore-scroll">
            {quotedServices &&
              services_list
                .filter((services) => quotedServices.includes(services.name))
                .map((service) => (
                  <div className="product" key={service.name}>
                    <div className="image">
                      <img
                        src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                        alt={service.name}
                        draggable={false}
                      />
                    </div>
                    <div className="details">
                      <p className="name">{service.name} </p>
                    </div>
                    <div className="action">
                      <IoMdClose onClick={() => removeProduct(service.name)} />
                    </div>
                  </div>
                ))}
          </div>
          <div className="form">
            <ProductQuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuoteContent;

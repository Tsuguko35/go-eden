import React, { useContext, useState } from "react";
import "../../styles/productsContent.css";
import { Link } from "react-router-dom";
import { ServicesQuotation } from "../../context";
import { services, services_description } from "../../utils";

function ProductsContent() {
  const { quotedServices, setQuotedServices } = useContext(ServicesQuotation);
  const [activeCategory, setActiveCategory] = useState("Essentials");
  const services_array = services;
  const services_desc = services_description;

  const addService = (service) => {
    const currentServices = quotedServices;

    const updatedServices = [...currentServices, service];

    setQuotedServices(updatedServices);
  };
  return (
    <div id="productsContent" className="productsContent">
      <div className="wrapper">
        {services_desc
          .filter((service) => service.id === activeCategory)
          .map((service) => (
            <React.Fragment key={service.title}>
              <div className="title">
                <p>{service.title}</p>
              </div>
              <p className="desc">{service.sub}</p>
            </React.Fragment>
          ))}

        <div className="categories-container">
          <p
            className={`category ${
              activeCategory === "Essentials" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("Essentials")}
          >
            Essentials
          </p>
          <p
            className={`category ${activeCategory === "PRO" ? "active" : ""}`}
            onClick={() => setActiveCategory("PRO")}
          >
            PRO
          </p>
          <p
            className={`category ${activeCategory === "ELITE" ? "active" : ""}`}
            onClick={() => setActiveCategory("ELITE")}
          >
            ELITE
          </p>
          <p
            className={`category ${activeCategory === "POWER" ? "active" : ""}`}
            onClick={() => setActiveCategory("POWER")}
          >
            POWER
          </p>
        </div>

        <div className="product-grid">
          {services_array &&
            services_array
              .filter((services) => services.category === activeCategory)
              .map((service) => (
                <div className="product">
                  <div className="product-tag new">New</div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                      alt="product 1"
                    />
                  </div>
                  <div className="product-detials">
                    <p className="name">{service.name}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsContent;

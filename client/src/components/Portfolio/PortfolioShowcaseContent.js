import React, { useContext } from "react";
import "../../styles/portfolioShowcaseContent.css";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { ServicesQuotation } from "../../context";

function PortfolioShowcaseContent() {
  const navigate = useNavigate();
  const { portfolioItem } = useParams();
  const { quotedServices, setQuotedServices } = useContext(ServicesQuotation);
  const addQuotation = () => {
    const currentServices = quotedServices;
    const updatedServices = [...currentServices, portfolioItem];
    setQuotedServices(updatedServices);

    navigate("/Services/Products/Quote");
  };
  return (
    <div id="portfolioShowcaseContent" className="portfolioShowcaseContent">
      <header>
        <div className="background">
          <img
            src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="text-content">
          <p className="title">Smart fixes for today's troubles</p>
          <p className="desc">
            The world is constantly evolving, and so are the challenges we face.
            At EDEN, we believe in harnessing the power of modern technology and
            innovative thinking to develop smart fixes for today's troubles.
          </p>
          <button className="action">Testimonials</button>
        </div>
      </header>

      <div className="wrapper">
        <div className="image">
          <img
            src="https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button onClick={() => addQuotation()}>Add to Quotation</button>
        </div>
        <div className="details">
          <p className="title">
            Energy Efficient Inverter Air condition installation.
          </p>
          <p className="date">November 24, 2023</p>
          <p className="detail-paragraph">
            Project Overview: This project involved the installation of a
            high-efficiency inverter air conditioning system in a [Type of
            property - e.g., spacious family home/bustling restaurant/historic
            two-story building]. The primary goal was to achieve [Desired
            outcome - e.g., consistent and comfortable cooling throughout the
            entire space/energy-saving cooling solution/temperature control in
            separate zones] while addressing the specific challenges of the
            property, such as [Mention specific challenges - e.g., maintaining
            even airflow in an open-concept layout/balancing cooling needs in a
            kitchen and dining area/preserving the historical integrity of the
            building].
          </p>
          <div className="features-grid">
            <div className="feature">
              <FaCircleCheck />
              <p>Reduced energy consumption.</p>
            </div>
            <div className="feature">
              <FaCircleCheck />
              <p>Enhanced comfort with consistent cooling.</p>
            </div>
            <div className="feature">
              <FaCircleCheck />
              <p>Installed zoned systems.</p>
            </div>
            <div className="feature">
              <FaCircleCheck />
              <p>Discreet unit placement.</p>
            </div>
            <div className="feature">
              <FaCircleCheck />
              <p>Pre-installation consultations.</p>
            </div>
            <div className="feature">
              <FaCircleCheck />
              <p>Employed multi-directional airflow technology.</p>
            </div>
          </div>

          <div className="client-testimonials">
            <p className="label">Clients Testimonials</p>
            <p className="testimonial">
              "I'm incredibly happy with the inverter air conditioning system
              installed by [Your Company Name]. The entire process, from the
              initial consultation to the final installation, was professional
              and efficient. The technicians were knowledgeable and explained
              everything clearly. The new system has made a huge difference in
              our comfort level, especially during the hot summer months. We've
              also noticed a significant reduction in our energy bills. I highly
              recommend [Your Company Name] to anyone considering an inverter
              air conditioner installation."
            </p>
            <p className="client">-Mary Rose Marie (Pennsylvania, USA)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioShowcaseContent;

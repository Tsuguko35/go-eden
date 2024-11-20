import React, { useContext, useEffect, useRef, useState } from "react";
import "../../styles/productQuoteForm.css";
import emailjs from "emailjs-com";
import LoadingDot from "../../assets/svg/LoadingDot";
import { ServicesQuotation } from "../../context";
import { useNavigate } from "react-router-dom";

function ProductQuoteForm() {
  const form = useRef();

  const { quotedServices, setQuotedServices } = useContext(ServicesQuotation);
  const [submit, setSubmit] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    home_address: "",
    city: "",
    state: "",
    postal_code: "",
    client_name: "",
    client_email: "",
    client_contact: "",
    client_address: "",
    client_service: "",
    client_message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmit(true);
    emailjs
      .sendForm(
        "service_53m9irt",
        "template_mvhgvbl",
        form.current,
        "WoGf1WNfMJ8EmmN6d"
      )
      .then(
        () => {
          setSubmit(false);
          setSubmitStatus("success");
          setFormData({
            first_name: "",
            last_name: "",
            home_address: "",
            city: "",
            state: "",
            postal_code: "",
            client_name: "",
            client_email: "",
            client_contact: "",
            client_address: "",
            client_property: "",
            client_message: "",
          });
          console.log("SUCCESS!");
        },
        (error) => {
          setSubmit(false);
          setSubmitStatus("error");
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      id="productQuoteForm"
      className="productQuoteForm"
    >
      <input
        type="text"
        value={`${formData.first_name} ${formData.last_name}`}
        name="client_name"
        style={{ display: "none" }}
      />
      <input
        type="text"
        value={`${formData.home_address}, ${formData.city}, ${formData.state}, ${formData.postal_code}`}
        name="client_address"
        style={{ display: "none" }}
      />
      <input
        type="text"
        value={quotedServices.join(", ")}
        name="client_service"
        style={{ display: "none" }}
      />
      <div className="inputs">
        <div className="input-group two">
          <div className="custom-input">
            <p className="label">First Name</p>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="custom-input">
            <p className="label">Last Name</p>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group two">
          <div className="custom-input">
            <p className="label">Email Address</p>
            <input
              type="text"
              name="client_email"
              value={formData.client_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="custom-input">
            <p className="label">Phone Number</p>
            <input
              type="number"
              name="client_contact"
              value={formData.client_contact}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="custom-input">
            <p className="label">Home Address</p>
            <input
              type="text"
              name="home_address"
              value={formData.home_address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group three">
          <div className="custom-input">
            <p className="label">City</p>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="custom-input">
            <p className="label">State/Region</p>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="custom-input">
            <p className="label">Postal Code</p>
            <input
              type="text"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div className="custom-texarea">
            <p className="label">Message (Optional)</p>
            <textarea
              name="client_message"
              value={formData.client_message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="submit-area">
          {submitStatus === "success" && (
            <p className="success">Message sent!</p>
          )}
          {submitStatus === "error" && (
            <p className="error">Error! Try again.</p>
          )}
          <button type="submit">
            {submit ? <LoadingDot width={35} height={35} /> : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProductQuoteForm;

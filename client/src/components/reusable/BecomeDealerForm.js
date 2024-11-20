import React, { useContext, useEffect, useRef, useState } from "react";
import "../../styles/becomeDealerForm.css";
import emailjs from "emailjs-com";
import LoadingDot from "../../assets/svg/LoadingDot";
import { ServicesQuotation } from "../../context";

function BecomeDealerForm() {
  const form = useRef();
  const { showPrivacyPolicy, setShowPrivacyPolicy } =
    useContext(ServicesQuotation);
  const [submit, setSubmit] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    client_name: "",
    client_email: "",
    client_contact: "",
    client_company: "",
    client_position: "",
    client_message: "",
    client_checked: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmit(true);
    emailjs
      .sendForm(
        "service_3d5j188",
        "template_w7l0h6k",
        form.current,
        "6cCRCqbZjJgu_1TAr"
      )
      .then(
        () => {
          setSubmit(false);
          setSubmitStatus("success");
          setFormData({
            first_name: "",
            last_name: "",
            client_name: "",
            client_email: "",
            client_contact: "",
            client_company: "",
            client_position: "",
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
      id="becomeDealerForm"
      className="becomeDealerForm feature"
    >
      <div className="text-content">
        <p className="label">
          Become one of over 200 dealerships and offer an exceptional customer
          experience!
        </p>
        <p className="desc">
          Dealership partnership packages start at $5,000 per dealer per month.
          Please see the other options below.
        </p>
      </div>
      <input
        type="text"
        value={`${formData.first_name} ${formData.last_name}`}
        name="client_name"
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
            <p className="label">Company</p>
            <input
              type="text"
              name="client_company"
              value={formData.client_company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="custom-input">
            <p className="label">Position</p>
            <input
              type="text"
              name="client_position"
              value={formData.client_position}
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
            <p className="label">Mobile or Landline Number</p>
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
          <div className="custom-texarea">
            <p className="label">Message (Optional)</p>
            <textarea
              name="client_message"
              value={formData.client_message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="checkbox-area">
          <input
            type="checkbox"
            required
            checked={formData.client_checked}
            onChange={() =>
              setFormData({
                ...formData,
                client_checked: !formData.client_checked,
              })
            }
          />
          <p>
            I have read and agree to{" "}
            <span
              className="highlight"
              onClick={() => setShowPrivacyPolicy(true)}
            >
              EDEN’s Privacy Policy.
            </span>
          </p>
        </div>

        <div className="submit-area">
          {submitStatus === "success" && (
            <p className="success">Message sent!</p>
          )}
          {submitStatus === "error" && (
            <p className="error">Error! Try again.</p>
          )}
          <button type="submit" disabled={submit}>
            {submit ? <LoadingDot width={35} height={35} /> : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default BecomeDealerForm;

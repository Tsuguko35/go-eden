import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import emailjs from "emailjs-com";
import { ServicesQuotation } from "../context";
import LoadingDot from "../assets/svg/LoadingDot";

function Footer() {
  const { setShowPrivacyPolicy } = useContext(ServicesQuotation);
  const form = useRef();
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    client_email: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmit(true);
    emailjs
      .sendForm(
        "service_3d5j188",
        "template_xp51ayw",
        form.current,
        "6cCRCqbZjJgu_1TAr"
      )
      .then(
        () => {
          setSubmit(false);
          setFormData({
            client_email: "",
          });
          console.log("SUCCESS!");
        },
        (error) => {
          setSubmit(false);
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
    <footer id="footer" className="footer">
      <div className="wrapper">
        <div className="logo">
          <img
            src={
              "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716425911/Eden_Files/d4bfdzjjfxte451baran.webp"
            }
            alt="Eden Logo"
          />
        </div>
        <div className="footer-content">
          <div className="contacts">
            <p className="title">Reach us</p>
            <div className="contact-group">
              <BiIcons.BiSolidPhoneCall />
              <p className="info">(866) 847-7972</p>
            </div>
            {/* <div className="contact-group">
              <RiIcons.RiMailFill />
              <p className="info">info@goedenhome.com</p>
            </div> */}
            <div className="contact-group">
              <MdIcons.MdLocationOn />
              <p className="info">6028 Stonybook CT, Topeka, KS 66614</p>
            </div>
          </div>
          <div className="nav-container">
            <div className="nav-list">
              <p className="title">Company</p>
              <Link to={"/About"}>About</Link>
              <Link to={"/Contact"}>Contact</Link>
              <Link to={"/Portfolio"}>Portfolio</Link>
            </div>
            <div className="nav-list">
              <p className="title">Legal</p>
              <Link onClick={() => setShowPrivacyPolicy(true)}>
                Privacy Policy
              </Link>
            </div>
            <div className="nav-list">
              <p className="title">Quick Links</p>
              <Link
                to={"https://www.facebook.com/profile.php?id=61559487871453"}
                target="_blank"
              >
                Facebook
              </Link>
            </div>
          </div>
          <div className="news-letter-container">
            <div className="news-letter">
              <div className="title">
                <p>Join Our</p>
                <p>Newsletter</p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Your email address"
                    name="client_email"
                    value={formData.client_email}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit">
                    {submit ? (
                      <LoadingDot width={30} height={30} />
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
              </form>
              <p className="note">
                * Will send you weekly updates for your better tool management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

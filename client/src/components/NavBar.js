import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GetWindowWidth, bottomNavItems } from "../utils";

import { Sling as Hamburger } from "hamburger-react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import routes from "../config/routes";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const windowWidth = GetWindowWidth();
  const [hide, setHide] = useState(false);
  const prevScrollY = useRef(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHidden, setShowHidden] = useState(false);
  const [hoveredNav, setHoveredNav] = useState("");
  const navItems = bottomNavItems;

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 300 && currentScrollY > prevScrollY.current) {
      setHide(true);
    } else {
      setHide(false);
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (item) => {
    setShowHidden(true);
    setHoveredNav(item);
  };

  const redirectToPageContent = (target) => {
    setShowHidden(false);
    navigate(target);
  };

  const resetState = () => {
    setShowHidden(false);
    setHoveredNav("");
  };

  const isActive = !routes.some((route) => {
    let isEqual = false;
    if (location.pathname.includes("/Portfolio/Showcase")) {
      isEqual = location.pathname
        .toLowerCase()
        .includes(route.path.toLowerCase());
    } else {
      isEqual = location.pathname.toLowerCase() === route.path.toLowerCase();
    }
    return isEqual;
  });

  return (
    <nav
      id="navBar"
      className={`navBar ${hide ? "hide" : ""}`}
      onMouseLeave={() => resetState()}
    >
      <div className="wrapper">
        <Link to={"/"}>
          <img
            src={
              "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716425911/Eden_Files/d4bfdzjjfxte451baran.webp"
            }
            alt="Eden Logo"
            className="logo"
          />
        </Link>
        {windowWidth > 1024 && (
          <div className="navigation">
            <Link
              className={`${
                location.pathname === "/" || isActive ? "active" : ""
              }`}
              to={"/"}
              onMouseEnter={() => resetState()}
            >
              Home
            </Link>
            <Link
              className={`${
                location.pathname.toLowerCase() === "/Services".toLowerCase() ||
                location.pathname
                  .toLowerCase()
                  .includes("/Services/".toLowerCase())
                  ? "active"
                  : ""
              }`}
              to={"/Services"}
              onMouseEnter={() => handleMouseEnter("Services")}
            >
              Service <MdKeyboardArrowDown />
            </Link>
            <Link
              className={`${
                location.pathname.toLowerCase() ===
                  "/Portfolio".toLowerCase() ||
                location.pathname
                  .toLowerCase()
                  .includes("/Portfolio/Showcase/".toLowerCase())
                  ? "active"
                  : ""
              }`}
              to={"/Portfolio"}
              onMouseEnter={() => handleMouseEnter("Portfolio")}
            >
              Portfolio <MdKeyboardArrowDown />
            </Link>
            <Link
              className={`${
                location.pathname.toLowerCase() === "/About".toLowerCase()
                  ? "active"
                  : ""
              }`}
              to={"/About"}
              onMouseEnter={() => handleMouseEnter("About")}
            >
              About <MdKeyboardArrowDown />
            </Link>
            <Link
              className={`${
                location.pathname.toLowerCase() === "/Contact".toLowerCase()
                  ? "active"
                  : ""
              }`}
              to={"/Contact"}
              onMouseEnter={() => resetState()}
            >
              Contact
            </Link>
            <Link
              className={`${
                location.pathname.toLowerCase() ===
                "/BecomeADealer".toLowerCase()
                  ? "active"
                  : ""
              }`}
              to={"/BecomeADealer"}
              onMouseEnter={() => resetState()}
            >
              Become a Dealer
            </Link>
            <button onClick={() => navigate("/Services#_getQuote")}>
              GET A QUOTE
            </button>
          </div>
        )}
        {windowWidth <= 1024 && (
          <>
            <div
              className="hamburgerMenu"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Hamburger
                color="#060606"
                label="Show menu"
                toggled={sidebarOpen}
              />
            </div>
            <div className={`navigation mobile ${sidebarOpen ? "open" : ""}`}>
              <Link
                className={`${
                  location.pathname === "/" || isActive ? "active" : ""
                }`}
                to={"/"}
              >
                Home
              </Link>
              <Link
                className={`${
                  location.pathname.toLowerCase() ===
                    "/Services".toLowerCase() ||
                  location.pathname
                    .toLowerCase()
                    .includes("/Services/".toLowerCase())
                    ? "active"
                    : ""
                }`}
                to={"/Services"}
              >
                Service
              </Link>
              <Link
                className={`${
                  location.pathname.toLowerCase() ===
                    "/Portfolio".toLowerCase() ||
                  location.pathname
                    .toLowerCase()
                    .includes("/Portfolio/Showcase/".toLowerCase())
                    ? "active"
                    : ""
                }`}
                to={"/Portfolio"}
              >
                Portfolio
              </Link>
              <Link
                className={`${
                  location.pathname.toLowerCase() === "/About".toLowerCase()
                    ? "active"
                    : ""
                }`}
                to={"/About"}
              >
                About
              </Link>
              <Link
                className={`${
                  location.pathname.toLowerCase() === "/Contact".toLowerCase()
                    ? "active"
                    : ""
                }`}
                to={"/Contact"}
              >
                Contact
              </Link>
              <Link
                className={`${
                  location.pathname.toLowerCase() ===
                  "/BecomeADealer".toLowerCase()
                    ? "active"
                    : ""
                }`}
                to={"/BecomeADealer"}
              >
                Become a Dealer
              </Link>
              <button onClick={() => navigate("/Services#_getQuote")}>
                GET A QUOTE
              </button>
            </div>
          </>
        )}
      </div>
      <div className={`hidden-nav ${showHidden ? "show" : ""}`}>
        <div className="wrapper">
          <div className="content-nav ignore-scroll">
            {showHidden &&
              navItems
                .filter((nav) => nav.title === hoveredNav)
                .map((nav) => (
                  <React.Fragment key={nav.title}>
                    {nav.items.map((item, index) => (
                      <div
                        className="nav-item"
                        key={index}
                        onClick={() =>
                          redirectToPageContent(item.serviceTarget)
                        }
                      >
                        <div className="title">
                          <img
                            src={item.serviceIcon}
                            alt=""
                            draggable={false}
                          />
                          <p>{item.serviceName}</p>
                        </div>
                        <div className="desc">{item.serviceDesc}</div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
          </div>
          <div className="vertical-divider"></div>
          <div className="quote-container">
            <div className="quote">
              <p>Transforming Houses into Homes with Innovative Solutions</p>
              <Link onClick={() => setShowHidden(false)} to={"/Services"}>
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

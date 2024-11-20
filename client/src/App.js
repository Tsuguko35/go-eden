import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./config";
import "./styles/styles.css";
import { FacebookMsg, NavBar, PrivacyPolicy } from "./components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ServicesQuotation } from "./context";
import { useEffect, useState } from "react";

function App() {
  const [quotedServices, setQuotedServices] = useState([]);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const hash = location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }, 300);
  }, [location]);

  //Animation
  // Animations
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.65;
      const features = document.querySelectorAll(".feature");

      features.forEach((feature) => {
        const featureBounding = feature.getBoundingClientRect();

        if (featureBounding.top <= triggerPoint) {
          feature.classList.add("reveal");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="main-container" data-scroll-container>
      <PrivacyPolicy show={showPrivacyPolicy} setShow={setShowPrivacyPolicy} />

      {/* Nav Bar */}
      <NavBar />

      {/* Facebook Chat */}
      <FacebookMsg />

      {/* Pages */}
      <ServicesQuotation.Provider
        value={{
          quotedServices,
          setQuotedServices,
          showPrivacyPolicy,
          setShowPrivacyPolicy,
        }}
      >
        <div className="pages">
          <Routes>
            {routes.map((route) => (
              <Route
                exact
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </div>
      </ServicesQuotation.Provider>
    </div>
  );
}

export default App;

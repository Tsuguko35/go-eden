import React, { useState } from "react";
import "../../styles/miniPortfolioCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../styles/innovationCarousel.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MiniPortfolioCarousel() {
  const [activeImage, setActiveImage] = useState(0);
  const member_pic =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716428239/Eden_Files/Eden_LandingPage/pqdoe1gcdmd30sjrq9dz.webp";
  const image_1 =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716428239/Eden_Files/Eden_LandingPage/vqzpzhyoglkvgfminw9m.webp";
  const images = [member_pic, image_1, member_pic, image_1, member_pic];
  return (
    <div id="miniPortfolioCarousel" className="miniPortfolioCarousel">
      <div className="image">
        <img
          src={
            "https://res.cloudinary.com/dkwgg59ur/image/upload/v1719360549/Eden_Files/knmhva0vi8wqjcgtb3ws.webp"
          }
          alt=""
        />
      </div>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={(e) => setActiveImage(e.activeIndex)}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="card">
            <p className="title">Level 1 Package ESSENTIALS</p>
            <p className="list-label">Included</p>
            <div className="list">
              <p className="item">• EDEN PRIME</p>
              <p className="item">• EDEN APC</p>
              <p className="item">• HVAC Tune-up</p>
              <p className="item">• HONEYWELL T6</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <p className="title">Level 2 Package PRO</p>
            <p className="list-label">Included</p>
            <div className="list">
              <p className="item">• EDEN PRIME</p>
              <p className="item">• EDEN APC</p>
              <p className="item">• HVAC Tune-up</p>
              <p className="item">• SynCat-360</p>
              <p className="item">• Emporia Vue Gen</p>
              <p className="item">• E-LED LIGHT BULBS</p>
              <p className="item">• HONEYWELL T6</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <p className="title">Level 3 Package ELITE</p>
            <p className="list-label">Included</p>
            <div className="list">
              <p className="item">• EDEN PRIME</p>
              <p className="item">• EDEN APC</p>
              <p className="item">• HVAC Tune-up</p>
              <p className="item">• SynCat-360</p>
              <p className="item">• Emporia Vue Gen</p>
              <p className="item">• E-LED LIGHT BULBS</p>
              <p className="item">• and more...</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <p className="title">POWER PACK</p>
            <p className="list-label">Included</p>
            <div className="list">
              <p className="item">• EDEN PRIME</p>
              <p className="item">• EDEN APC</p>
              <p className="item">• HVAC Tune-up</p>
              <p className="item">• SynCat-360</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MiniPortfolioCarousel;

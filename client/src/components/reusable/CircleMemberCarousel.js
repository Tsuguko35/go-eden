import React from "react";
import "../../styles/circleMemberCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";

function CircleMemberCarousel() {
  return (
    <div id="circleMemberCarousel" className="circleMemberCarousel">
      <div className="wrapper">
        <div className="carousel-content">
          <div className="title">
            <p>Our Success is Driven by </p>
            <p>Our Exceptional Team</p>
          </div>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            modules={[EffectCoverflow, Navigation]}
            navigation={{ clickable: true }}
            className="swiper-container"
          >
            <SwiperSlide>
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                  alt="Team member"
                />
                <p className="name">William Beliles</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                  alt="Team member"
                />
                <p className="name">William Beliles</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                  alt="Team member"
                />
                <p className="name">William Beliles</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                  alt="Team member"
                />
                <p className="name">William Beliles</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                  alt="Team member"
                />
                <p className="name">William Beliles</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CircleMemberCarousel;

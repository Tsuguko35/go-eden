import React from "react";
import "../../styles/clientReviewsMini.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { user_reviews } from "../../utils";

function ClientReviewsMini() {
  return (
    <div id="clientReviewsMini" className="clientReviewsMini">
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          1060: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          280: {
            slidesPerView: 1,
          },
        }}
        className="swiper-container"
      >
        {user_reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <div className="client-details">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718934361/Eden_Files/clbxd2qi5lsshrzf5bee.svg"
                  alt="client profile"
                />
                <p className="name">{review.name}</p>
              </div>
              <p className="review">{review.review}</p>
              <p className="date">{review.date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientReviewsMini;

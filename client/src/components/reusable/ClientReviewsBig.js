import React from "react";
import "../../styles/clientReviewsBig.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { user_reviews } from "../../utils";

function ClientReviewsBig() {
  return (
    <div id="clientReviewsBig" className="clientReviewsBig">
      <div className="title">
        <p>Clients Testimonials</p>
        <p>What Our Clients Say?</p>
      </div>
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        loop={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
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
              <div className="client-detials">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718934361/Eden_Files/clbxd2qi5lsshrzf5bee.svg"
                  alt="client profile"
                />
                <div className="details">
                  <p className="name">{review.name}</p>
                </div>
              </div>
              <p className="review">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientReviewsBig;

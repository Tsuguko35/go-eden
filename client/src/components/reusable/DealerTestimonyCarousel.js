import React from "react";
import "../../styles/dealerTestimonyCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { dealer_reviews } from "../../utils";

function DealerTestimonyCarousel() {
  return (
    <div
      id="dealerTestimonyCarousel"
      className="dealerTestimonyCarousel feature"
    >
      <p className="title">Testimonials from our dealers</p>
      <p className="label">
        Discover the power of our partnerships through the experiences of our
        successful dealers.
      </p>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
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
        {dealer_reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718934361/Eden_Files/clbxd2qi5lsshrzf5bee.svg"
                  alt="client profile"
                />
              </div>
              <div className="review">
                <div className="client-details">
                  <p className="name">{review.dealer}</p>
                  <p className="role">{review.position}</p>
                </div>
                <p className="review-text">{review.review}</p>
                <p className="date">{review.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DealerTestimonyCarousel;

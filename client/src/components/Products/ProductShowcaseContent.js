import React from "react";
import "../../styles/productShowcaseContent.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { IoIosStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { IoRemove, IoAdd } from "react-icons/io5";

function ProductShowcaseContent() {
  return (
    <div id="productShowcaseContent" className="productShowcaseContent">
      <div className="wrapper">
        <div className="product">
          <div className="product-preview">
            <div className="slider">
              <Swiper
                grabCursor={true}
                slidesPerView={3}
                direction={"horizontal"}
                className="mySwiper"
                spaceBetween={20}
                breakpoints={{
                  768: {
                    direction: "vertical",
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <img
                    src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716707866/Eden_Files/Eden_Products/egpsbioza5rvkavinutq.webp"
                    alt="product"
                    className="product-image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716707866/Eden_Files/Eden_Products/egpsbioza5rvkavinutq.webp"
                    alt="product"
                    className="product-image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716707866/Eden_Files/Eden_Products/egpsbioza5rvkavinutq.webp"
                    alt="product"
                    className="product-image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716707866/Eden_Files/Eden_Products/egpsbioza5rvkavinutq.webp"
                    alt="product"
                    className="product-image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716707866/Eden_Files/Eden_Products/egpsbioza5rvkavinutq.webp"
                    alt="product"
                    className="product-image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716707866/Eden_Files/Eden_Products/egpsbioza5rvkavinutq.webp"
                    alt="product"
                    className="product-image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716707866/Eden_Files/Eden_Products/egpsbioza5rvkavinutq.webp"
                    alt="product"
                    className="product-image"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="preview">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716707866/Eden_Files/Eden_Products/egpsbioza5rvkavinutq.webp"
                alt="product 1"
              />
            </div>
          </div>
          <div className="product-order">
            <p className="name">Bed Lampshade</p>
            <p className="price">$70-$100</p>
            <div className="ratings">
              <div className="stars">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoMdStarHalf />
              </div>
              <span className="divider"></span>
              <p>5 Customer Reviews</p>
            </div>
            <p className="desc">
              Soft illumination for your bedside haven. This lampshade creates a
              calming atmosphere perfect for unwinding before sleep.
            </p>

            <div className="product-form-input">
              <p className="label">Sizes</p>
              <div className="choices size">
                <p className="active">L</p>
                <p>XL</p>
                <p>XS</p>
              </div>
            </div>

            <div className="product-form-input color">
              <p className="label">Color</p>
              <div className="choices color">
                <p style={{ backgroundColor: "#1A4443" }}></p>
                <p style={{ backgroundColor: "#D6AE30" }}></p>
                <p style={{ backgroundColor: "#BFA280" }}></p>
              </div>
            </div>

            <div className="actions">
              <div className="item-ammount">
                <IoRemove />
                <p>1</p>
                <IoAdd />
              </div>
              <div className="submit">Add To Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductShowcaseContent;

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Transportation() {
  const initialImages = Array.from(
    { length: 7 },
    (_, i) => `/images/c${i + 1}.png`
  );
  const [images] = useState(initialImages);

  return (
    <section className="transportation_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h6 className="section_hint">Our Delivery Vehicles</h6>
            <h3 className="section_title">
              A variety of trusted transportation methods for every shipment
            </h3>
          </div>

          <div className="col-12 p-2">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              dir="ltr"
              spaceBetween={12}
              speed={1000}
              autoplay={
                images.length > 1
                  ? { delay: 1500, disableOnInteraction: false }
                  : false
              }
              breakpoints={{
                0: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                991: { slidesPerView: 5 },
                1400: { slidesPerView: 6 },
              }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="logo">
                    <img src={src} alt={`c ${index + 1}`} loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

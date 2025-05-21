import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Clients() {
  const initialImages = Array.from(
    { length: 10 },
    (_, i) => `/images/client${i + 1}.png`
  );
  const [images] = useState(initialImages);

  return (
    <section className="clients_section">
      <div className="container">
        <div className="row">
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
                    <img src={src} alt={`Client ${index + 1}`} loading="lazy" />
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

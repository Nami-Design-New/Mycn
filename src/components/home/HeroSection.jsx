import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  return (
    <section className="hero_section">
      <Swiper
        slidesPerView={1}
        dir="ltr"
        effect="fade"
        modules={[Autoplay, EffectFade]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="hero_slide">
            <img src="/images/slide-1.jpg" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero_slide">
            <img src="/images/slide-2.jpg" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero_slide">
            <img src="/images/slide-3.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

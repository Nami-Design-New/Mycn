import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero({ slides }) {
  const { i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  return (
    <section className="hero_section">
      <Swiper
        slidesPerView={1}
        dir={lang === "ar" ? "rtl" : "ltr"}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero_slide">
              <div className="image_wrapper">
                <img src={`/images/Hero.png`} alt={slide.slideTitle} />
              </div>
              <div className="content">
                <p className="small_hint">{slide.subtitle}</p>
                <h2 className="slide_title">{slide.title}</h2>
                <p className="slide_description">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

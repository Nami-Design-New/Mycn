import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  const slides = t("heroSection.slides", { returnObjects: true });

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
              <img
                src={`/images/slide-${index + 1}.jpg`}
                alt={slide.slideTitle}
              />
              <div className="content">
                <p className="small_hint">{slide.smallHint}</p>
                <h2 className="slide_title">{slide.slideTitle}</h2>
                <p className="slide_description">{slide.slideDescription}</p>
                <Link to="/register" className="slide_button">
                  {slide.slideButton}
                  <span>
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

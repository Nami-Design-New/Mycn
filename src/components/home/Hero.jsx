import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
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
        {/* <img src="/images/bottom-bg.png" alt="wave" className="wave_bottom" /> */}

        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero_slide">
              <div className="image_wrapper">
                <img
                  // src={`/images/slide-${index + 1}.jpg`}
                   src={`/images/hero0.jpg`}
                  alt={slide.slideTitle}
                />
              </div>
              <div className="content">
                <p className="small_hint">{slide.smallHint}</p>
                <h2 className="slide_title">{slide.slideTitle}</h2>
                <p className="slide_description">{slide.slideDescription}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        {/* <img src="/images/floating.png" alt="floating" className="floating_image" /> */}

    </section>
  );
}

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials({ data }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

 

  return (
    <section className="testimonials_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 d-flex justify-content-between">
            <div>
              <h6 className="section_hint">{t("about.subtitle")}</h6>
              <h3 className="section_title">{t("about.title")}</h3>
            </div>

            <div className="swiper_navigation">
              <button className="swiper-button-prev">
                <i className="fa-regular fa-arrow-left"></i>
              </button>
              <button className="swiper-button-next">
                <i className="fa-regular fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="col-12 p-2">
            <Swiper
              slidesPerView={3}
              spaceBetween={16}
              dir={lang === "ar" ? "rtl" : "ltr"}
              modules={[Autoplay, Navigation]}
              loop={true}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {data?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="review">
                    <div className="review-speech">
                      <p>{slide.text}</p>
                    </div>
                    <div className="media">
                      <div className="thumbnail">
                        <img src={slide.author_image} alt="testimonial image" />
                      </div>
                      <div className="media-body">
                        <h6 className="title">{slide.author_name}</h6>
                        <div className="rating">
                          {Array(+slide.rate)
                            .fill()
                            .map((_, index) => (
                              <i key={index} className="fa-solid fa-star"></i>
                            ))}
                          {Array(5 - +slide.rate)
                            .fill()
                            .map((_, index) => (
                              <i key={index} className="fa-regular fa-star"></i>
                            ))}
                        </div>
                      </div>
                    </div>
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

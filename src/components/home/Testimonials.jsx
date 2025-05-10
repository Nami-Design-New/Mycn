import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  const slides = [
    {
      name: "John Doe",
      description:
        "Amazing service! My packages always arrive quickly and in perfect condition. Highly recommended for international shopping.",
      image: "/images/avatar.jpg",
      rate: 5,
    },
    {
      name: "Sarah Smith",
      description:
        "The process was smooth from start to finish. Uploading items was simple, and customer support was very responsive.",
      image: "/images/avatar.jpg",
      rate: 4,
    },
    {
      name: "William Anderson",
      description:
        "I was surprised at how easy it was to shop from China. The team handled everything professionally. Will use again!",
      image: "/images/avatar.jpg",
      rate: 5,
    },
    {
      name: "Emily Zhang",
      description:
        "I’ve tried many forwarding services, but this one truly stands out. Fast, reliable, and super easy to use!",
      image: "/images/avatar.jpg",
      rate: 2,
    },
    {
      name: "Ahmed Ali",
      description:
        "Their tracking system kept me updated at every step. I received my order safely and faster than expected!",
      image: "/images/avatar.jpg",
      rate: 3,
    },
  ];

  return (
    <section className="testimonials_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 d-flex justify-content-between">
            <div>
              <h6 className="section_hint">{t("testimonials.subtitle")}</h6>
              <h3 className="section_title">{t("testimonials.title")}</h3>
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
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {slides?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="review">
                    <div className="review-speech">
                      <p>{slide.description}</p>
                    </div>
                    <div className="media">
                      <div className="thumbnail">
                        <img src={slide.image} alt="testimonial image" />
                      </div>
                      <div className="media-body">
                        <h6 className="title">{slide.name}</h6>
                        <div className="rating">
                          {Array(slide.rate)
                            .fill()
                            .map((_, index) => (
                              <i key={index} className="fa-solid fa-star"></i>
                            ))}
                          {Array(5 - slide.rate)
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

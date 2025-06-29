import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function HowWeWorks({ data }) {
  const { t } = useTranslation();

  const onMouseEnter = (e) => {
    const steps = document.querySelectorAll(".step");
    steps.forEach((step) => step.classList.remove("active"));

    const step = e.currentTarget;
    step.classList.add("active");
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const firstStep = document.querySelector(".step");
      if (firstStep) {
        firstStep.classList.add("active");
      }
    }
  }, [data]);

  return (
    <section className="how_we_work_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h6 className="section_hint">{t("about.workProcessTitle")}</h6>
            <h3 className="section_title">
              {t("about.workProcessDescription")}
            </h3>
          </div>

          <div className="col-12 p-2">
            <div className="steps">
              {data?.map((item, index) => (
                <article
                  className="step"
                  onMouseEnter={onMouseEnter}
                  key={item.id}
                >
                  <div className="wrapper">
                    <div
                      className="imgbox col-md-6"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="img">
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt={item.title}
                        />
                      </div>
                      <div className="num">{index + 1}</div>
                      <h4 className="title">{item.title}</h4>
                    </div>
                    <div className="content-box col-md-6">
                      <div className="num">{index + 1}</div>
                      <div className="content-inner">
                        <h4 className="title">{item.title}</h4>
                        <div className="description">{item.description}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* <div className="col-12 p-2 mt-4  d-flex justify-content-center">
            <Link to="how-it-works">
              <button className="watch_btn">{t("about.watchVideo")}</button>{" "}
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}

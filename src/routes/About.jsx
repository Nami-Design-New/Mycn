import { useTranslation } from "react-i18next";
import Testimonials from "../components/home/Testimonials";
import useGetAbout from "../hooks/settings/useGetAbout";

export default function About() {
  const { t } = useTranslation();
  const { data: about } = useGetAbout();

  return (
    <>
      <section className="about_section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 p-2">
              <div className="img">
                <img src={about?.mainAboutUs?.image} alt="about" />
              </div>
            </div>
            <div className="col-lg-7 col-12 p-2">
              <div className="content">
                <h2 className="section_title">{about?.mainAboutUs?.title}</h2>
                <div
                  className="section_description"
                  dangerouslySetInnerHTML={{
                    __html: about?.mainAboutUs?.text,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="value_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 p-2">
              <div className="value_item">
                <div className="head">
                  <h3>{t("about.vision")}</h3>
                  <img src="/icons/vision.svg" alt="vision" />
                </div>
                <div className="body">
                  <p>{t("about.visionText")}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 p-2">
              <div className="value_item">
                <div className="head">
                  <h3>{t("about.mission")}</h3>
                  <img src="/icons/mission.svg" alt="mission" />
                </div>
                <div className="body">
                  <p>{t("about.missionText")}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 p-2">
              <div className="value_item">
                <div className="head">
                  <h3>{t("about.values")}</h3>
                  <img src="/icons/values.svg" alt="values" />
                </div>
                <div className="body">
                  <p>{t("about.valuesText")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials data={about?.testimonialDetail} />
    </>
  );
}

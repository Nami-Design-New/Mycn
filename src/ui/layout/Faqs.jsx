import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import useGetLatestFaqs from "../../hooks/faqs/useGetLatestFaqs";
import useAuth from "../../hooks/useAuth";

export default function Faqs() {
  const { t } = useTranslation();
  const { data: faqs } = useGetLatestFaqs();
  const { isAuthed } = useAuth();

  return (
    <section className="faqs_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 p-2 mb-3">
            <h6 className="section_hint">{t("faq.subtitle")}</h6>
            <h3 className="section_title text-center">{t("faq.title")}</h3>
          </div>

          <div className="col-lg-9 col-12 p-2">
            <Accordion defaultActiveKey={0}>
              {faqs?.frequentlyQuestionsDetail?.map((item, index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>
                    <p> {item.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <div className="btns">
              <Link to="/faqs" className="btn">
                {t("faq.viewAll")}
              </Link>
              <Link to={isAuthed ? "/profile" : "/signup"} className="btn">
                {isAuthed ? t("faq.startShipping") : t("faq.signUp")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

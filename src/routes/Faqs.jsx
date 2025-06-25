import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import useGetFaqs from "../hooks/faqs/useGetFaqs";

export default function Faqs() {
  const { t } = useTranslation();
  const { data: faqs = [] } = useGetFaqs();

  const [activeTab, setActiveTab] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (faqs.length > 0) {
      setActiveTab(faqs[0].id);
      setQuestions(faqs[0].frequently_questions || []);
    }
  }, [faqs]);

  const handleTabChange = (id) => {
    setActiveTab(id);
    const selected = faqs.find((item) => item.id === id);
    setQuestions(selected?.frequently_questions || []);
  };

  return (
    <section className="faqs_page main_section mt-80">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-1">
            <h3 className="section_title">{t("about.faqsTitle")}</h3>
            <p className="section_description">
              {t("about.faqT1")} <Link to="/contact">{t("about.faqT2")}</Link>{" "}
              {t("about.faqT3")}
            </p>
          </div>

          <div className="col-lg-3 col-12 p-2">
            <div className="tabs">
              {faqs.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={item.id === activeTab ? "active" : ""}
                >
                  <img src={item.icon} alt={item.title} />
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-9 col-12 p-2">
            <Accordion defaultActiveKey="0">
              {questions.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={item.id}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>
                    <p>{item.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
              {questions.length === 0 && (
                <p className="mt-3">
                  {t("No questions available in this category.")}
                </p>
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

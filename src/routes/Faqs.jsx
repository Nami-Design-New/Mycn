import { Accordion } from "react-bootstrap";
import { Link } from "react-router";

export default function Faqs() {
  const questions = [
    {
      id: 1,
      question: "How much does international shipping cost with My CN?",
      answer:
        "Shipping costs depend on the destination country, package weight, dimensions, and chosen carrier. You can estimate shipping costs using our shipping calculator.",
    },
    {
      id: 2,
      question: "What are duties and taxes, and who pays them?",
      answer:
        "Duties and taxes are fees imposed by your country's customs authority. Typically, these are paid upon delivery in your home country. However, in some cases, My CN may collect these fees in advance, depending on the carrier and destination.",
    },
    {
      id: 3,
      question: "How does package consolidation work?",
      answer:
        "Our package consolidation service allows you to save on shipping costs by combining multiple items into one shipment. You can store your packages for free for up to 45 days, giving you the flexibility to wait for all your purchases to arrive.",
    },
    {
      id: 4,
      question: "Are there any storage fees?",
      answer:
        "We provide free storage for up to 45 days. After this period, a storage fee of $0.08 per pound per day is applied.",
    },
    {
      id: 5,
      question: "What items are prohibited from shipping?",
      answer:
        "Certain items are prohibited from international shipping through My CN, including: cash, currency, credit or debit cards; firearms and related accessories; prescription drugs and devices; hazardous materials; live animals. For a comprehensive list, please refer to our prohibited items list.",
    },
    {
      id: 6,
      question: "What are the estimated delivery times?",
      answer:
        "Delivery times vary based on the chosen shipping carrier and service level: DHL Worldwide Express: 2–5 business days; FedEx Express: 2–5 business days; USPS Express Mail International: 4–8 business days; DHL Global Mail: 6–15 business days. Please note that delivery times are estimates and can be affected by customs processing and other factors.",
    },
  ];

  const tabs = [
    {
      title: "About MYCN",
      image: "/icons/about.svg",
    },
    {
      title: "Consolidation & Re-packing",
      image: "/icons/re-packaging.svg",
    },
    {
      title: "Prohibited Goods",
      image: "/icons/prohibited.svg",
    },
    {
      title: "Duties & Taxes",
      image: "/icons/tax.svg",
    },
    {
      title: "Package Management & Receiving",
      image: "/icons/management.svg",
    },
    {
      title: "Returns Process",
      image: "/icons/return.svg",
    },
  ];

  return (
    <section className="faqs_page">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-1">
            <h3 className="section_title">Frequently Asked Questions</h3>
            <p className="section_description">
              Find answers here, or <Link to="/contact">contact us</Link> if you
              need more help.
            </p>
          </div>
          <div className="col-lg-3 col-12 p-2">
            <div className="tabs">
              {tabs.map((item, index) => (
                <button key={index} className={index === 0 ? "active" : ""}>
                  <img src={item.image} alt={item.title} />
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-9 col-12 p-2">
            <Accordion defaultActiveKey={0}>
              {questions.map((item, index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>
                    <p> {item.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

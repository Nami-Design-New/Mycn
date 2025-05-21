import { Link } from "react-router";
const steps = [
  {
    id: 1,
    num: "01",
    title: "Sign Up & Get Your China Address",
    image: "/images/how-it-works-1.jpg",
    description:
      "Create your free account in seconds and receive your own dedicated shipping address in China. Use it whenever you shop from any Chinese website — it's your personal gateway to Chinese e-commerce.",
  },
  {
    id: 2,
    num: "02",
    title: "Shop & Upload Your Orders",
    image: "/images/how-it-works-2.jpg",
    description:
      "Browse top Chinese marketplaces like 1688, Taobao, and more. Once you've placed your orders, simply upload the details to your account so we can handle everything from there.",
  },
  {
    id: 3,
    num: "03",
    title: "We Receive, Inspect & Ship",
    image: "/images/how-it-works-3.jpg",
    description:
      "Your packages are received at our warehouse, professionally inspected, safely packed, and consolidated to reduce shipping costs — all while ensuring your items are protected and ready to go.",
  },
  {
    id: 4,
    num: "04",
    title: "Track Every Step Until Delivery",
    image: "/images/how-it-works-4.jpg",
    description:
      "Get real-time tracking updates from our warehouse to your doorstep. Enjoy full visibility and peace of mind knowing exactly where your shipment is at all times.",
  },
];

export default function HowWeWorks() {
  const onMouseEnter = (e) => {
    const steps = document.querySelectorAll(".step");
    steps.forEach((step) => step.classList.remove("active"));

    const step = e.currentTarget;
    step.classList.add("active");
  };

  return (
    <section className="how_we_work_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h6 className="section_hint">Our work process</h6>
            <h3 className="section_title">
              We always follow the best ways of logistics
            </h3>
          </div>

          <div className="col-12 p-2">
            <div className="steps">
              {steps.map((item) => (
                <article
                  className={`step ${item.id === 1 ? "active" : ""}`}
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
                      <div className="num">{item.num}</div>
                      <h4 className="title">{item.title}</h4>
                    </div>
                    <div className="content-box col-md-6">
                      <div className="num">{item.num}</div>
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

          <div className="col-12 p-2 mt-4  d-flex justify-content-center">
            <Link to="How_Work">
              <button className="watch_btn">Show How My CN Works</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

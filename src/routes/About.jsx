import HowWeWorks from "../components/home/HowWeWorks";
import Testimonials from "../components/home/Testimonials";

export default function About() {
  return (
    <>
      <section className="about_section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 p-2">
              <div className="img">
                <img src="/images/about.jpg" alt="about" />
              </div>
            </div>
            <div className="col-lg-7 col-12 p-2">
              <div className="content">
                <h2 className="section_title">About My CN</h2>
                <p className="section_description">
                  At My CN, we are passionate about redefining the international
                  shipping experience for individuals and businesses alike. Our
                  mission is to make cross-border shopping, shipping, and
                  logistics more affordable, transparent, and hassle-free.
                </p>

                <ul>
                  <li>
                    🌍 Global Reach: Shop from any country and ship worldwide
                    with ease.
                  </li>
                  <li>
                    🚚 Multiple Shipping Options: Choose from leading carriers
                    at competitive rates.
                  </li>
                  <li>
                    📦 Consolidation Services: Save more by combining multiple
                    packages into one shipment.
                  </li>
                  <li>
                    🔐 Secure Storage: Enjoy free storage for a limited period
                    at our secure warehouses.
                  </li>
                  <li>
                    📊 Transparent Pricing: Get instant shipping estimates with
                    no hidden fees.
                  </li>
                  <li>
                    🧾 Customs Support: We simplify customs declarations and
                    provide accurate documentation.
                  </li>
                  <li>
                    🤝 Exceptional Support: Our customer service team is here to
                    assist you every step of the way.
                  </li>
                </ul>

                <p>
                  With years of experience and a commitment to excellence, My CN
                  has become a trusted logistics partner for thousands of
                  satisfied customers around the globe. We believe in giving you
                  full control, visibility, and confidence in your shipments.
                </p>

                <p className="mb-0">
                  Ready to simplify your international shopping and shipping
                  journey? <strong>Join My CN today</strong> and experience the
                  future of cross-border logistics.
                </p>
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
                  <h3>Our Vision</h3>
                  <img src="/icons/vision.svg" alt="vision" />
                </div>
                <div className="body">
                  <p>
                    We envision a seamless global marketplace where individuals
                    and businesses can shop and ship across borders without
                    barriers — anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 p-2">
              <div className="value_item">
                <div className="head">
                  <h3>Our Mission</h3>
                  <img src="/icons/mission.svg" alt="mission" />
                </div>
                <div className="body">
                  <p>
                    Our mission is to simplify and empower global logistics by
                    providing reliable, cost-effective, and user-friendly
                    solutions tailored to the needs of every customer.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 p-2">
              <div className="value_item">
                <div className="head">
                  <h3>Our Values</h3>
                  <img src="/icons/values.svg" alt="values" />
                </div>
                <div className="body">
                  <p>
                    We are driven by transparency, trust, and innovation. Our
                    values reflect a strong commitment to customer satisfaction,
                    operational excellence, and continuous improvement in
                    everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <HowWeWorks />
    </>
  );
}

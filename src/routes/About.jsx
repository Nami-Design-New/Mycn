import Faqs from "../ui/layout/Faqs";

export default function About() {
  return (
    <>
      <section className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 p-2">
              <div className="image">
                <img src="/images/about.jpg" alt="about" />

                <div className="play_video">
                  <img src="/icons/play.svg" alt="play" />
                </div>
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

                <p>
                  Ready to simplify your international shopping and shipping
                  journey? <strong>Join My CN today</strong> and experience the
                  future of cross-border logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faqs />
    </>
  );
}

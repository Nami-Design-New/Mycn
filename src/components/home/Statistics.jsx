import { Link } from "react-router";

export default function Statistics() {
  return (
    <section className="statistics_section">
      <div className="inner_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="text">
                <h6>Our experience</h6>
                <h2>Leader In Supply Chain Storage & Distribution</h2>

                <ul>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> Secure
                    Packaging
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> Quality
                    Assurance
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> Express
                    Delivery
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> 24/7 Customer
                    Support
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> Easy Tracking
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i>
                    Cost-Effective Shipping
                  </li>
                </ul>

                <Link to="/about">
                  More About Us
                  <span>
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="img">
                <img src="/images/ship.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="states">
                <div className="state">
                  <h2>
                    <i className="fa-light fa-arrow-up-long"></i> 150K
                  </h2>
                  <p>
                    Join the companies that trust create to lead their AI
                    transformation
                  </p>
                </div>
                <div className="state">
                  <h2>
                    <i className="fa-light fa-arrow-up-long"></i> 100K
                  </h2>
                  <p>
                    Successful Project Completion for all transport authorize
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

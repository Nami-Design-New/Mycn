import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 p-2">
            <div className="news_letter">
              <h6>Subscribe for latest updates & insights</h6>
              <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 p-2">
            <Link to="/" className="logo">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
            <p className="description">
              At My CN, we are a premier logistics provider committed to
              delivering efficient and dependable shipping solutions tailored to
              our customers&#39; needs. Leveraging cutting-edge technology and a
              customer-centric approach, we ensure seamless and timely delivery
              experiences across the globe.
            </p>
          </div>

          <div className="col-lg-2 col-md-6 col-12 p-2">
            <h4 className="title">Quick Links</h4>
            <ul className="links_list">
              <li>
                <Link to="/about">About MYCN</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <h4 className="title">Our Services</h4>

            <ul className="links_list">
              <li>
                <Link to="/how-it-works">How it works</Link>
              </li>
              <li>
                <Link to="/package-consolidation">Package consolidation</Link>
              </li>
              <li>
                <Link to="/repacking">Repacking</Link>
              </li>
              <li>
                <Link to="/shipping-calculator">Shipping Calculator</Link>
              </li>
              <li>
                <Link to="/restricted-special-handling">
                  Restricted and special handling items
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <h4 className="title">Get In Touch</h4>

            <ul className="links_list">
              <li>
                Phone: <a href="tel:+1-800-123-4567">+1-800-123-4567</a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:support@example.com">support@example.com</a>
              </li>
              <li>
                Address:{" "}
                <a href="https://www.google.com/maps">
                  123 Main Street, Anytown, USA 12345
                </a>
              </li>
              <li>Business Hours: 9 AM - 5 PM EST</li>
            </ul>
          </div>

          <div className="col-12">
            <div className="copyright">
              <p>
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                to <span>MYCN</span>
              </p>

              <div className="socials">
                <Link>
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link>
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link>
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link>
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

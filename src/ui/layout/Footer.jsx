import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 p-2">
            <div className="news_letter">
              <h6>{t("footer.subscribeToNewsletter")}</h6>
              <form>
                <input type="email" placeholder={t("auth.enterEmail")} />
                <button type="submit">{t("footer.subscribe")}</button>
              </form>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 p-2">
            <Link to="/" className="logo">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
            <p className="description">{t("footer.text")}</p>
          </div>

          <div className="col-lg-2 col-md-6 col-12 p-2">
            <h4 className="title">{t("footer.quickLinks")}</h4>
            <ul className="links_list">
              <li>
                <Link to="/about">{t("footer.about")}</Link>
              </li>
              <li>
                <Link to="/faqs">{t("footer.faqs")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("footer.contactUs")}</Link>
              </li>
              <li>
                <Link to="/terms-conditions">{t("footer.terms")}</Link>
              </li>
              <li>
                <Link to="/privacy-policy">{t("footer.privacyPolicy")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <h4 className="title">{t("footer.ourServices")}</h4>

            <ul className="links_list">
              <li>
                <Link to="/how-it-works">{t("footer.howItWorks")}</Link>
              </li>
              <li>
                <Link to="/package-consolidation">
                  {t("footer.packageConsolidation")}
                </Link>
              </li>
              <li>
                <Link to="/repacking">{t("footer.repacking")}</Link>
              </li>
              <li>
                <Link to="/shipping-calculator">
                  {t("footer.shippingCalculator")}
                </Link>
              </li>
              <li>
                <Link to="/restricted-special-handling">
                  {t("footer.restrictedItems")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <h4 className="title">{t("footer.getInTouch")}</h4>

            <ul className="links_list">
              <li>
                {t("footer.phone")}:{" "}
                <a href="tel:+1-800-123-4567">+1-800-123-4567</a>
              </li>
              <li>
                {t("footer.email")}:{" "}
                <a href="mailto:support@example.com">support@example.com</a>
              </li>
              <li>
                {t("footer.address")}:{" "}
                <a href="https://www.google.com/maps">
                  123 Main Street, Anytown, USA 12345
                </a>
              </li>
              <li>{t("footer.businessHours")}: 9 AM - 5 PM EST</li>
            </ul>
          </div>

          <div className="col-12">
            <div className="copyright">
              <p>
                {t("footer.copyright")} &copy; {new Date().getFullYear()}{" "}
                {t("footer.allRightsReserved")} <span>MYCN</span>
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

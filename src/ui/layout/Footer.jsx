import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Link } from "react-router";
import useGetSettings from "../../hooks/settings/useGetSettings";
import axiosInstance from "../../utils/axiosInstance";

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: settings } = useGetSettings();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/home/storeEmailToNewsLetters", {
        email: email,
      });
      if (res.status === 200) {
        toast.success(t("auth.emailSubscribed"));
        setEmail("");
      }
    } catch (error) {
      toast.error(error.message || t("auth.somethingWentWrong"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 p-2">
            <div className="news_letter">
              <h6>{t("footer.subscribeToNewsletter")}</h6>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder={t("auth.enterEmail")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">
                  {loading ? (
                    <i className="fa-regular fa-circle-notch fa-spin"></i>
                  ) : (
                    t("footer.subscribe")
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 p-2">
            <Link to="/" className="logo">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
            <p className="description">{settings?.text_footer}</p>
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
                <a href={`tel:${settings?.phone}`}>{settings?.phone}</a>
              </li>
              <li>
                {t("footer.email")}:{" "}
                <a href={`mailto:${settings?.email}`}>{settings?.email}</a>
              </li>
              <li>
                {t("footer.address")}:{" "}
                <a
                  href={`https://www.google.com/maps?q=${settings?.latitude},${settings?.longitude}`}
                  target="_blank"
                >
                  {settings?.address}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12">
            <div className="copyright">
              <p>
                {t("footer.copyright")} &copy; {new Date().getFullYear()}{" "}
                {t("footer.allRightsReserved")} <span>MYCN</span>
              </p>

              <div className="socials">
                <Link to={settings?.facebook} target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to={settings?.twitter} target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link to={settings?.linkedin} target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link to={settings?.instagram} target="_blank">
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

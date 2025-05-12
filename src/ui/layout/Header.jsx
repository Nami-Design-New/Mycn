import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router";

export default function Header() {
  const { t } = useTranslation();

  useEffect(() => {
    const header = document.querySelector(".header");

    const handleScroll = () => {
      header.classList.toggle("sticky", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="container">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="" />
        </Link>

        <div className="nav_links">
          <NavLink to="/">{t("header.home")}</NavLink>
          <NavLink to="/about">{t("header.about")}</NavLink>
          <NavLink to="/shipping-calculator">
            {t("header.shippingCalculator")}
          </NavLink>
          <NavLink to="/my-orders">{t("header.myOrders")}</NavLink>
          <NavLink to="/contact">{t("header.contact")}</NavLink>
        </div>

        <div className="actions">
          <button>
            <i className="fa-regular fa-globe"></i> EN
          </button>
          <Link to="/signin" className="login">{t("header.login")}</Link>
        </div>
      </nav>
    </header>
  );
}

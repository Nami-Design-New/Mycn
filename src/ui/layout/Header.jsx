import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router";
import UserDropDown from "./UserDropDown";

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

  const handleToggleMenu = () => {
    const menu = document.querySelector(".nav_links");
    menu.classList.toggle("open");
  };

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
          <NavLink to="/faqs">{t("header.faqs")}</NavLink>
          <NavLink to="/contact">{t("header.contact")}</NavLink>
        </div>

        <div className="actions">
          <button>
            <i className="fa-regular fa-globe"></i> EN
          </button>
          {/* <Link to="/signin" className="login">{t("header.login")}</Link> */}
          <UserDropDown />

          <button className="toggle_menu" onClick={handleToggleMenu}>
            <i className="fa-regular fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}

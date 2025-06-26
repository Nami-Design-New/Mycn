import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

function ResponsiveNav() {
  const { t } = useTranslation();

  return (
    <div className="small_menu">
      <NavLink to="/profile" className="menu_item">
        <i className="fa-regular fa-user"></i>
        <span>{t("header.myAccount")}</span>
      </NavLink>

      <NavLink to="/profile/notifications" className="menu_item">
        <i className="fa-regular fa-bell"></i>
        <span>{t("header.notifications")}</span>
      </NavLink>

      <NavLink
        aria-label="My Shipments"
        to="/profile/my-shipments"
        className="menu_item"
      >
        <i className="fa-regular fa-truck"></i>
        <span>{t("header.myShipments")}</span>
      </NavLink>
    </div>
  );
}

export default ResponsiveNav;

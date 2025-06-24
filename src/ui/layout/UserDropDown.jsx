import { Dropdown } from "react-bootstrap";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import useLogout from "../../hooks/auth/useLogout";
import { useSelector } from "react-redux";

export default function UserDropDown() {
  const { t } = useTranslation();
  const { logout } = useLogout(t);
  const { client } = useSelector((state) => state.clientData);

  return (
    <Dropdown>
      <Dropdown.Toggle className="user_dropdown">
        <span>{client?.first_name + " " + client?.last_name}</span>
        <i className="fa fa-chevron-down"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu text-end">
        <Dropdown.Item as={Link} to="/profile/notifications">
          <i className="fa-regular fa-bell"></i>
          {t("header.notifications")}
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/profile/my-shipments">
          <i className="fa-regular fa-truck"></i>
          {t("header.myShipments")}
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/profile/my-transactions">
          <i className="fa-solid fa-dollar-sign"></i>
          {t("header.myTransactions")}
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/profile/my-addresses">
          <i className="fa-regular fa-location-dot"></i>
          {t("header.myAddresses")}
        </Dropdown.Item>

        <Dropdown.Item as={"div"} className="logout" onClick={logout}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          {t("header.logout")}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

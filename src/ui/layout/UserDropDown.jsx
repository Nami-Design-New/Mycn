import { Dropdown } from "react-bootstrap";
import { Link } from "react-router";

export default function UserDropDown() {
  return (
    <Dropdown className="d-lg-block d-none">
      <Dropdown.Toggle className="user_dropdown">
        <span>My Account</span>
        <i className="fa fa-chevron-down"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu text-end">
        <Dropdown.Item as={Link} to="/profile/my-shipments">
          <i className="fa-regular fa-bell"></i>
          Notifications
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/profile/my-shipments">
          <i className="fa-regular fa-truck"></i>
          My Shipments
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/profile/my-shipments">
          <i className="fa-solid fa-dollar-sign"></i>
          My Transactions
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/profile/my-shipments">
          <i className="fa-regular fa-location-dot"></i>
          My Addresses
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/signin" className="logout">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          Sign Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

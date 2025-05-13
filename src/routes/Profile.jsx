import { NavLink, Outlet } from "react-router";

export default function Profile() {
  return (
    <section className="profile_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12 p-2">
            <div className="profile_sidebar">
              <div className="user">
                <div className="avatar">AE</div>
                <div className="content">
                  <h6>Ahmed Elsayed</h6>
                  <span>ahmedelsayed2102@icloud.com</span>
                </div>
              </div>

              <div className="nav_links">
                <NavLink to="" end className="nav_link">
                  <i className="fa-regular fa-chart-line"></i>
                  Dashboard
                </NavLink>

                <NavLink to="my-shipments" className="nav_link">
                  <i className="fa-regular fa-truck"></i>
                  My Shipment
                </NavLink>

                <NavLink to="my-transactions" className="nav_link">
                  <i className="fa-solid fa-dollar-sign"></i>
                  My Transactions
                </NavLink>

                <NavLink to="notifications" className="nav_link">
                  <i className="fa-regular fa-bell"></i>
                  Notifications
                </NavLink>

                <NavLink to="my-addresses" className="nav_link">
                  <i className="fa-regular fa-location-dot"></i>
                  My Addresses
                </NavLink>

                <NavLink to="/signin" className="nav_link">
                  <i className="fa-regular fa-sign-out-alt"></i>
                  Sign Out
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-md-4 col-12 p-0">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

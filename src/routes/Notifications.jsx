import useGetNotifications from "../hooks/profile/useGetNotifications";

export default function Notifications() {
  const { data: notifications } = useGetNotifications();

  return (
    <div className="notifications">
      <div className="row">
        {notifications?.map((notification) => (
          <div className="col-12 p-2" key={notification.id}>
            <div className="notification_card">
              <div className="icon">
                <i className="fa-regular fa-bell"></i>
              </div>
              <div className="content">
                <h6>{notification?.title}</h6>
                <p>{notification?.body}</p>

                <span>
                  {notification?.created_at || "11:00"}{" "}
                  <i className="fa-regular fa-clock"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

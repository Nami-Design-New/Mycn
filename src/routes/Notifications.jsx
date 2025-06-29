import { useTranslation } from "react-i18next";
import useGetNotifications from "../hooks/profile/useGetNotifications";

export default function Notifications() {
  const { t } = useTranslation();
  const { data: notifications } = useGetNotifications();

  return (
    <div className="notifications h-100">
      <div className="row h-100">
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

        {notifications?.length === 0 && (
          <div className="col-12 p-2">
            <div className="empty_wrap">
              <img src="/icons/bell.svg" alt="empty-box" />
              <h6>{t("empty_notifications")}</h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

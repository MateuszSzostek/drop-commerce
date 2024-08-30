"use client";

import useNotifications from "./useNotifications";
import "./notifications.css";
import SuccessCheckmarkSvg from "@/assets/images/components/SuccessCheckmarkSvg";

export default function Notifications() {
  const { notifications, handleDeleteNotification } = useNotifications();

  return (
    <div className="notifications__container">
      {notifications.map((el) => (
        <div
          className="notification"
          onClick={() => handleDeleteNotification(el?.id)}
        >
          <div className="notification__icon">
            <SuccessCheckmarkSvg />
          </div>
          <div className="notification__content">
            <span className="notification__title">{el?.title}</span>
            <span className="notification__body">{el?.body}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

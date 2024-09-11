"use client";

import useNotifications from "./useNotifications";
import "./notifications.css";
import SuccessCheckmarkSvg from "@/assets/images/components/SuccessCheckmarkSvg";
import WarningCheckmarkSvg from "@/assets/images/components/WarningCheckmarkSvg";
import FailCheckmarkSvg from "@/assets/images/components/FailCheckmarkSvg";

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
            {el?.type === "success" && <SuccessCheckmarkSvg />}
            {el?.type === "warning" && <WarningCheckmarkSvg />}
            {el?.type === "error" && <FailCheckmarkSvg />}
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

"use client";

import { RootState } from "@reduxjs/toolkit/query";
import { useAppSelector } from "@/lib/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  addNotification,
  removeNotification,
} from "@/store/notificationsStoreSlice";
import { generateRandomString } from "@/store/const";

export default function useNotifications() {
  const { notifications } = useAppSelector(
    (state) => state.notificationsStoreApi
  );

  useEffect(() => {
    console.warn(notifications);
  }, [notifications]);

  const dispatch = useDispatch();

  const showNotification = ({
    title,
    body,
  }: {
    title: string;
    body: string;
  }) => {
    console.log("show notification");

    const notificationId = generateRandomString(10);

    dispatch(addNotification({ id: notificationId, title, body }));
    console.log("after dispatch");
    setTimeout(() => {
      dispatch(removeNotification({ id: notificationId }));
      console.log("timeouted");
    }, 1000000);
  };

  const handleDeleteNotification = (id) => {
    dispatch(removeNotification({ id }));
  };

  return { notifications, showNotification, handleDeleteNotification };
}

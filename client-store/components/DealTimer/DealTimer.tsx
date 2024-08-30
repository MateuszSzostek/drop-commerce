"use client";

import React, { useEffect, useState } from "react";
import IDealTimer from "./DealTimer.types";
import translations from "@/translations/translations.pl";

export default function DealTimer({ timeInSeconds }: IDealTimer) {
  const [timeLeft, setTimeLeft] = useState(timeInSeconds);
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const days = Math.floor(timeLeft / 24 / 60 / 60);
    const hoursLeft = Math.floor(timeLeft - days * 86400);
    const hours = Math.floor(hoursLeft / 3600);
    const minutesLeft = Math.floor(hoursLeft - hours * 3600);
    const minutes = Math.floor(minutesLeft / 60);
    const remainingSeconds = timeLeft % 60;

    function pad(n: number) {
      return n < 10 ? 0 + n : n;
    }

    setTime({
      days: pad(days),
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(remainingSeconds),
    });
  }, [timeLeft]);

  useEffect(() => {
    function timer(ttimeLeft: number) {
      if (timeLeft == 0) {
        clearInterval(countdownTimer);
      } else {
        setTimeLeft((state) => {
          return state - 1;
        });
      }
    }
    var countdownTimer = setInterval(() => timer(timeLeft), 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);

  return (
    <div className="timing-wrapper">
      <div className="box-wrapper">
        <div className="date box">
          <span className="key">{time?.days}</span>
          <span className="value">{translations.HotDealCard["days"]}</span>
        </div>
      </div>
      <div className="box-wrapper">
        <div className="hour box">
          <span className="key">{time?.hours}</span>
          <span className="value">{translations.HotDealCard["hrs"]}</span>
        </div>
      </div>
      <div className="box-wrapper">
        <div className="minutes box">
          <span className="key">{time?.minutes}</span>
          <span className="value">{translations.HotDealCard["mins"]}</span>
        </div>
      </div>
      <div className="box-wrapper">
        <div className="seconds box">
          <span className="key">{time?.seconds}</span>
          <span className="value">{translations.HotDealCard["secs"]}</span>
        </div>
      </div>
    </div>
  );
}

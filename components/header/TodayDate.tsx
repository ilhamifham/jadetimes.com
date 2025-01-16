"use client";

import { useEffect, useState } from "react";

const TodayDate = ({ className }: { className: string }) => {
  const [todayDate, setTodayDate] = useState(new Date());

  useEffect(() => {
    setTodayDate(new Date());
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const today = todayDate.toLocaleDateString("en-US", options);

  return <div className={className}>{today}</div>;
};

export default TodayDate;

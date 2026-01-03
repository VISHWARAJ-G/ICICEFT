import { CircleDashed, CircleDot, CircleStopIcon } from "lucide-react";
import React from "react";

function TimelineDate() {
  const dateMap = [
    { name: "Full Paper submission", date: "2025-12-29" },
    { name: "Acceptance Notification", date: "2025-12-30" },
    { name: "Camera Ready Paper Due", date: "2026-02-02" },
    { name: "Early Bird Registration", date: "2026-03-02" },
    { name: "Late Registration", date: "2026-03-03" },
  ];
  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  const getStatus = (dateStr) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const target = new Date(dateStr).setHours(0, 0, 0, 0);
    if (today > target) return "past";
    if (today === target) return "today";
    return "future";
  };
  const statusClass = {
    past: "text-yellow-600",
    today: "text-yellow-600 animate-pulse",
    future: "text-gray-500",
  };
  const rowClass = {
    past: "opacity-50",
    today: "",
    future: "opacity-100",
  };
  const getTimelineProgressIndex = () => {
    const today = new Date().setHours(0, 0, 0, 0);
    return dateMap.findIndex(
      (d) => new Date(d.date).setHours(0, 0, 0, 0) >= today
    );
  };
  const activeIndex = getTimelineProgressIndex();
  return (
    <section className="relative px-2">
      <div className="h-96 w-0.5 bg-gray-300"></div>
      <div className="flex flex-col gap-7 absolute top-5 left-[-3px] ">
        {dateMap.map((obj) => {
          return (
            <div
              className={`flex gap-4 ${rowClass[getStatus(obj.date)]}`}
              key={obj.date}
            >
              <div>
                <CircleStopIcon
                  className={`${statusClass[getStatus(obj.date)]}`}
                />{" "}
              </div>
              <div className="font-bold text-sm flex flex-col gap-2">
                <div
                  className={`text-sm ${
                    getStatus(obj.date) === "today"
                      ? "text-yellow-600 font-extrabold"
                      : "text-yellow-600"
                  }`}
                >
                  {formatDate(obj.date)}
                </div>
                <div className="text-gray-700">{obj.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TimelineDate;

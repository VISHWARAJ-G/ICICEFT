import { CircleDot } from "lucide-react";
import React, { useEffect, useState } from "react";

function TimelineSection() {
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const timings = [
    {
      date: "November 04 2024",
      title: "Full Paper Submissions",
      desc: "Follow our schedule to stay updated on key deadlines and events leading up to the conference",
    },
    {
      date: "November 11 2024",
      title: "Acceptance Notification",
      desc: "Follow our schedule to stay updated on key deadlines and events",
    },
    {
      date: "November 25 2024",
      title: "Camera Ready Paper Due",
      desc: "Follow our schedule to stay updated on key deadlines and events",
    },
    {
      date: "December 12 2024",
      title: "Early Bird Registration",
      desc: "Follow our schedule to stay updated on key deadlines and events",
    },
    {
      date: "December 10 2024",
      title: "Late Registration",
      desc: "Follow our schedule to stay updated on key deadlines and events",
    },
  ];
  useEffect(() => {
    const section = document.getElementById("timeline");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("timeline");
      if (!section || !inView) {
        setProgress(0);
        return;
      }

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visible = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / section.offsetHeight)
      );

      setProgress(visible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);
  return (
    <section className="bg-gray-100 sm:px-5 py-12 flex flex-col items-center justify-center gap-7">
      <div className="flex flex-col items-center justify-center md:w-1/2 w-full gap-3">
        <p className="font-bold md:text-4xl sm:text-2xl text-lg">
          Conference Timeline
        </p>
        <p className="w-full text-center text-gray-600 lato-regular text-sm md:text-base">
          Follow our schedule to stay updated on key deadlines and events
          leading up to the conference
        </p>
      </div>
      <div id="timeline" className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 md:w-[4px] bg-gray-600"></div>
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[4px] bg-blue-600 transition-all duration-700 ease-out"
          style={{ height: `${progress * 100}%` }}
        ></div>
        <div className="flex flex-col gap-10">
          {timings.map((obj, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex w-full ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`relative w-1/2 sm:px-5 px-2 ${
                    isLeft
                      ? "sm:text-right text-center"
                      : "sm:text-left text-center"
                  }`}
                >
                  <div
                    className={`absolute top-1 ${
                      isLeft ? "-right-5" : "left-0"
                    } transform -translate-x-1/2`}
                  >
                    <CircleDot className="w-5 h-5 text-blue-600 animate-ping" />
                  </div>
                  <div
                    className={`bg-white shadow-md rounded-lg flex flex-col justify-center items-center sm:block sm:p-5 p-2 w-full ${
                      isLeft ? "border-l-4" : "border-r-4"
                    } border-blue-600`}
                  >
                    <p className="text-blue-600 lato-bold md:text-base sm:text-sm text-xs">
                      {obj.date}
                    </p>
                    <h3 className="font-bold md:text-xl sm:text-base text-sm">
                      {obj.title}
                    </h3>
                    <p className="text-gray-700 mt-1 leading-relaxed lato-regular md:text-base sm:text-sm text-xs">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;

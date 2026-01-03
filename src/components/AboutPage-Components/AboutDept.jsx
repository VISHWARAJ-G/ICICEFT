import {
  BarChart,
  Bot,
  Boxes,
  BrainCircuit,
  Drone,
  Factory,
  View,
  Wifi,
} from "lucide-react";
import React from "react";

function AboutDept() {
  const courses = [
    "CSE",
    "CSE (Cyber Security)",
    "CSE (Internet of Things)",
    "AIDS",
    "AIML",
    "IT",
  ];
  const domains = [
    "AI & ML",
    "AR/VR",
    "IoT",
    "Robotics",
    "Blockchain",
    "Data Science",
    "Mobile Robotics",
  ];
  const domainIcons = {
    "AI & ML": BrainCircuit,
    "AR/VR": View,
    IoT: Wifi,
    Robotics: Bot,
    Blockchain: Boxes,
    "Data Science": BarChart,
    "Mobile Robotics": Drone,
  };
  return (
    <section className="md:px-14 sm:px-14 p-2 pt-20 pb-10 flex w-full flex-col gap-9 items-center bg-gray-200">
      <div className="flex flex-col justify-between xl:w-[80%] sm:w-[90%] w-full p-6 rounded-xl bg-white relative shadow-xl shadow-[rgba(0,0,0,0.2)]">
        <div className="flex justify-center items-center">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 sm:w-40 sm:h-40 w-36 h-36 flex items-center justify-center">
            <img
              src="/optimized/Scoft.webp"
              loading="lazy"
              decoding="async"
              alt="SCoFT"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-justify py-10 md:pt-36 sm:pt-32 pt-28 w-full">
            <div className="flex flex-col sm:gap-5 gap-2">
              <div className="font-bold xl:text-4xl sm:text-2xl text-lg">
                About SCoFT
              </div>
              <div className="md:text-base sm:text-sm text-xs">
                Established in 2020, the Saveetha Consortium for Future
                Technologies (SCoFT) is a multidisciplinary academic consortium
                formed to advance Industry 5.0 learning and research at Saveetha
                Engineering College. With experienced professors and research
                scholars from diverse engineering and computing domains, SCoFT
                promotes real-time, experiential learning and supports
                innovation through institutional consultancy projects. The
                consortium enables students to transform unique ideas into
                practical solutions under expert academic guidance while
                connecting the student community with real-world Industry 5.0
                experts.
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col w-full">
            <div className="grid lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-7 font-bold">
              {courses.map((courseName) => {
                return (
                  <div
                    className="bg-gray-200 rounded-full flex items-center justify-center p-4 xl:text-base sm:text-sm text-xs "
                    key={courseName}
                  >
                    {courseName}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center xl:w-[80%] sm:w-[90%]">
        <div className="text-justify flex flex-col gap-7 justify-betwee w-full">
          <div className="font-bold xl:text-4xl sm:text-2xl text-lg">
            Core Domains
          </div>
          <div className="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-7 text-justify font-bold">
            {domains.map((d) => {
              const Icon = domainIcons[d];
              return (
                <div
                  key={d}
                  className="relative overflow-hidden bg-white rounded-xl group"
                >
                  <div className="relative z-10 flex items-center gap-3 p-3 justify-center group-hover:text-white">
                    <Icon className="w-6 h-6 text-blue-800 group-hover:text-white" />
                    <span className="xl:text-base text-xs">{d}</span>
                  </div>
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-sky-950/90 via-teal-900/70 to-blue-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDept;

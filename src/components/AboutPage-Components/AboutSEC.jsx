import {
  CircleCheckBig,
  CpuIcon,
  EyeIcon,
  FactoryIcon,
  FlagIcon,
  FlaskConical,
  GemIcon,
  GitBranchPlus,
  LandmarkIcon,
  MedalIcon,
  MicroscopeIcon,
  RocketIcon,
  ShieldCheckIcon,
  TargetIcon,
  TelescopeIcon,
  TrendingUpIcon,
} from "lucide-react";
import React from "react";
import { centresOfExcellence } from "../../services/CoEs";

function AboutSEC() {
  const featuresBoxes = [
    { logo: LandmarkIcon, name: "ESTABLISHED", value: "2001" },
    { logo: MedalIcon, name: "NAAC GRADE", value: "A+" },
    { logo: ShieldCheckIcon, name: "NBA ACCREDITED", value: "Yes" },
    { logo: TrendingUpIcon, name: "NIRF RANKING", value: "Ranked" },
    { logo: MicroscopeIcon, name: "SIRO RECOGNIZED", value: "Yes" },
  ];
  const Overview = [
    "Saveetha Engineering College operates as a multidisciplinary academic campus structured around outcome-based education, industry relevance, and technology-driven learning. Its academic framework emphasizes project-based instruction, continuous assessment, and early research exposure, ensuring that students develop strong analytical, design, and problem-solving capabilities from the foundational level.",
    "The campus fosters an innovation-oriented ecosystem through advanced research facilities, high-performance computing resources, and active industry collaboration. Students are trained in emerging domains such as artificial intelligence, automation, and data engineering, enabling smooth transition into global technical environments through structured mentoring and applied learning pathways.",
  ];
  const infraHighlights = [
    {
      Logo: CpuIcon,
      textColor: "text-green-800",
      bgColor: "bg-green-100",
      title: "NVIDIA DGX H100",
      desc: "High-performance AI supercomputing facility for advanced research and deep learning.",
    },
    {
      Logo: GitBranchPlus,
      textColor: "text-blue-800",
      bgColor: "bg-blue-100",
      title: "Flexi Learn",
      desc: "A flexible academic credit system enabling personalized learning pathways.",
    },
    {
      Logo: FlaskConical,
      textColor: "text-purple-800",
      bgColor: "bg-purple-100",
      title: "Advanced Research Labs",
      desc: "State-of-the-art laboratories supporting interdisciplinary research and innovation.",
    },
    {
      Logo: FactoryIcon,
      textColor: "text-orange-800",
      bgColor: "bg-orange-100",
      title: "Industry 5.0 Ecosystem",
      desc: "An industry-integrated ecosystem focused on human-centric and applied engineering.",
    },
  ];
  const MVBoxes = [
    {
      Logo: FlagIcon,
      title: "Our Mission",
      textColor: "text-blue-600",
      borderColor: "border-l-4 border-l-blue-600 rounded-2xl",
      desc: "To promote academic excellence; widen intellectual horizon; self-discipline and high ideals for the total personality development of the individual.",
      bgColor: "bg-blue-300/50 backdrop-blur-xl",
    },
    {
      Logo: EyeIcon,
      title: "Our Vision",
      textColor: "text-yellow-800",
      borderColor: "border-l-4 border-l-yellow-800 rounded-2xl",
      desc: "To be and to be recognized for setting the standard of excellence in engineering education and high quality research in Science and Technology.",
      bgColor: "bg-yellow-300/50 backdrop-blur-xl",
    },
  ];
  const CoEs = centresOfExcellence;
  return (
    <div className="w-full bg-gray-200 md:px-21 sm:px-7 px-3 py-12 flex flex-col gap-16">
      <div className="bg-white flex xl:flex-row flex-col items-center justify-center sm:gap-7 gap-4 xl:p-0 md:p-10 sm:p-5 pt-5  rounded-3xl overflow-hidden">
        <div className="xl:w-[400px] md:w-[300px] w-[200px] xl:min-w-[400px] md:min-w-[300px] min-w-[200px] h-full min-h-full shrink-0">
          <img src="College2.png" alt="SEC" className="w-full h-full" />
        </div>
        <div className="flex-[4] flex flex-col md:gap-5 gap-2 xl:pr-6 justify-center">
          <div className="xl:text-left text-center flex flex-col xl:gap-1 sm:gap-4">
            <h1 className="md:text-4xl sm:text-2xl text-lg font-bold">
              Saveetha Engineering College
            </h1>
            <h4 className="md:text-lg sm:text-base font-bold text-gray-600 leading-relaxed">
              (Autonomous)
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-justify md:text-base sm:text-sm text-xs leading-relaxed p-4 xs:p-0">
              Saveetha Engineering College (Autonomous), established in 2001
              under the visionary leadership of Dr. N. M. Veeraiyan, is a
              premier institution committed to academic excellence, research
              innovation, and Industry 5.0–driven education. Affiliated with
              Anna University and approved by AICTE, the institution is
              accredited by NBA, recognized by DSIR as a Scientific and
              Industrial Research Organization (SIRO), ranked by NIRF, and
              awarded an ‘A’ grade by NAAC. With 32 Centres of Excellence,
              advanced research infrastructure, and the world’s most powerful
              NVIDIA DGX H100 AI supercomputing facility, Saveetha Engineering
              College empowers learners through flexible, future-ready academic
              programs and cutting-edge technological innovation.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
        {featuresBoxes.map((obj) => {
          const Logo = obj.logo;
          return (
            <div className="bg-white px-8 py-5 flex flex-col items-center gap-4 rounded-3xl">
              <Logo size={28} className="text-yellow-600" />
              <span className="text-gray-600 text-center font-semibold sm:text-base xs:text-sm text-xs">
                {obj.name}
              </span>
              <span className="font-bold sm:text-xl text-base text-center">
                {obj.value}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex gap-5 lg:flex-row flex-col ">
        <div className="flex-[3]">
          <div className="flex flex-col gap-7 bg-white p-7 rounded-2xl">
            <div className="border-l-4 border-l-yellow-400 px-4 md:text-2xl sm:text-xl text-lg font-bold md:p-3 p-2">
              Overview
            </div>
            <div className="text-justify">
              <ul className="space-y-3">
                {Overview.map((para) => {
                  return (
                    <li className="flex items-start gap-3 md:text-base xs:text-sm text-xs ">
                      <CircleCheckBig
                        size={14}
                        className="text-yellow-400 mt-[3.5px] shrink-0"
                      />
                      <span>{para}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-[2] flex lg:flex-col sm:flex-row flex-col min-h-full gap-6 justify-between">
          {MVBoxes.map((obj) => {
            const Logo = obj.Logo;
            return (
              <div
                className={`${obj.borderColor} p-4 flex flex-col gap-4 flex-1 bg-white shadow-xl shadow-[rgba(0,0,0,0.2)]`}
              >
                <div className="flex gap-3 items-center">
                  <div className={`${obj.bgColor} p-3 rounded-xl`}>
                    <Logo size={28} className={obj.textColor} />
                  </div>
                  <h3
                    className={`${obj.textColor} font-bold md:text-xl sm:text-lg text-base text-justify`}
                  >
                    {obj.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-justify text-gray-600 md:text-base text-sm">
                  {obj.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="border-l-4 border-l-yellow-400 px-4 md:text-2xl sm:text-xl text-lg font-bold p-3">
          Infrastrature Highlights
        </div>
        <div className="grid md:grid-cols-2  gap-10">
          {infraHighlights.map((obj) => {
            const Logo = obj.Logo;
            return (
              <div className="md:p-6 px-3 py-5 flex gap-5 bg-white rounded-2xl">
                <div>
                  <div className={`${obj.bgColor} md:p-4 p-2 rounded-2xl`}>
                    {<Logo className={obj.textColor} />}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold sm:text-lg text-base ">
                    {obj.title}{" "}
                  </h3>
                  <h5 className="sm:text-sm text-xs text-gray-700">
                    {obj.desc}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white md:p-7 sm:p-5 p-4 flex flex-col gap-7 border-2 rounded-2xl">
        <div className="flex md:gap-5 gap-2 items-center">
          <div className={`bg-sky-950 text-white p-3 rounded-xl`}>
            <GemIcon size={28} />
          </div>
          <h3 className={`font-bold sm:text-lg text-base`}>
            Centres of Excellence
          </h3>
        </div>
        <div className="flex gap-6 flex-wrap">
          {CoEs.map((coe) => (
            <div
              key={coe}
              className="relative overflow-hidden rounded-lg group bg-gray-200 transition-colors duration-500"
            >
              <div className="relative z-10 font-bold p-3 text-sm transition-colors duration-300 group-hover:text-white">
                {coe}
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-sky-950/90 via-teal-900/70 to-blue-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSEC;

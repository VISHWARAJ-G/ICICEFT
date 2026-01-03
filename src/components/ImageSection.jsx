import React from "react";
import { Link } from "react-router-dom";

function ImageSection({
  LandingPage,
  Sec,
  Department,
  Conference,
  IAdvisory,
  NAdvisory,
  OC,
  Tracks,
  TVPage,
  Contact,
}) {
  return (
    <>
      <section
        className={`relative mt-16 bg-gray-200 w-screen ${
          LandingPage
            ? "lg:h-[40rem] sm:h-[30rem] h-[20rem]"
            : "md:h-[10rem] sm:h-[6rem] h-[8rem]"
        }`}
      >
        {LandingPage && !Sec && !Department && !Conference ? (
          <>
            <img
              src="/optimized/College.webp"
              fetchpriority="high"
              loading="eager"
              decoding="async"
              alt="Saveetha Engineering College"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <div className="lg:w-[90%] absolute lg:top-auto sm:top-20 w-full lg:px-auto sm:px-5 flex flex-col gap-5">
                <h1 className="lg:text-5xl sm:text-3xl xs:text-2xl raleway font-extrabold text-white text-center leading-tight md:px-5 px-2 sm:px-auto">
                  International Conference on Innovations in Computing:
                  Exploring the Frontiers of Technology (ICICEFT)
                </h1>
                <div className="flex justify-center items-center">
                  <div className="flex flex-col items-center gap-2">
                    <h5 className="text-gray-100 text-xs lato-regular font-semibold tracking-wide">
                      IN ASSOCIATION WITH
                    </h5>
                    <img
                      src="/optimized/Springer.webp"
                      loading="lazy"
                      decoding="async"
                      alt="Springer"
                      className="md:h-14 sm:h-10 h-10 backdrop-blur-xl bg-white/100"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <div className="flex justify-center gap-16 md:w-1/2 md:ml-[-1rem] lato-regular">
                    <div className="px-4 backdrop-blur-sm bg-slate-100/10 border-2 border-slate-100 font-medium rounded-lg text-white text-nowrap lg:text-base sm:text-sm text-xs flex justify-center items-center">
                      <Link to="/conference">Conference Info</Link>
                    </div>
                    <button className="bg-yellow-600 font-medium rounded-lg text-white sm:px-5 sm:py-4 px-5 py-3 text-nowrap lg:text-base sm:text-sm text-xs">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <img
              src="/optimized/College2.webp"
              fetchpriority="high"
              loading="eager"
              decoding="async"
              alt="Saveetha Engineering College"
              className="w-full h-full object-cover"
            />
            <div className="inset-0 md:pt-6 mt-0 md:px-21 sm:px-7 px-3 absolute bg-black/70 flex items-center justify-start">
              <div
                className={`border-l-4 border-yellow-500 sm:px-5 px-2 py-3 ${
                  LandingPage
                    ? "md:text-4xl text-3xl items-center"
                    : "md:text-2xl sm:text-xl text-base flex-col gap-1"
                }  flex justify-center text-white font-bold`}
              >
                <div>
                  {Sec && "About SEC"}
                  {Department &&
                    "Saveetha Consortium for Future Technologies (SCoFT)"}
                  {Conference && "ICICEFT"}
                  {IAdvisory && "International Advisory Committee"}
                  {NAdvisory && "National Advisory Committee"}
                  {OC && "Organizing Committee"}
                  {Tracks && "Tracks"}
                  {TVPage && "Travels and VISA"}
                  {Contact && "Contact Us"}
                </div>
                <div>
                  {Department && (
                    <div className="sm:text-base text-xs text-slate-300">
                      Industry 5.0 Learning & Research Consortium
                    </div>
                  )}
                  {Conference && (
                    <div className="sm:text-base text-xs text-slate-300">
                      Organized by SEC
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default ImageSection;

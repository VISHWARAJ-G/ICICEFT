import { BusFrontIcon, HospitalIcon, MapIcon } from "lucide-react";
import { AirplaneInFlight, AirplaneTakeoff, Bus, Train } from "phosphor-react";
import React from "react";

function TravelsVisaComponent() {
  const features = [
    { Logo: AirplaneTakeoff, title: "40 km from Airport" },
    { Logo: MapIcon, title: "Located on NH-48" },
    { Logo: Bus, title: "24/7 cab & bus connectivity" },
    { Logo: HospitalIcon, title: "Near Hospitals & Hotels" },
  ];
  return (
    <section className="pt-8 mt-0 md:px-21 sm:px-7 px-3 flex flex-col gap-12 bg-gray-200">
      <div className="flex flex-col gap-7">
        <div className="px-3 border-l-4 border-l-yellow-400">
          <h3 className="md:text-2xl sm:text-xl text-lg font-bold px-2">
            Venue Overview
          </h3>
        </div>
        <div className="flex md:flex-row flex-col-reverse py-10 md:py-0 gap-10 bg-white overflow-hidden rounded-3xl border-l-4 border-l-yellow-400  relative">
          <div className="flex-[4] flex flex-col md:gap-5 gap-2 pr-6 justify-center pl-8">
            <div className="text-left flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="md:text-2xl sm:text-lg text-base font-bold">
                  Saveetha Engineering College
                </h1>
                <h4 className="md:text-sm text-xs text-gray-600 leading-relaxed">
                  Saveetha Nagar, Kanchipuram - Chennai Rd, Sriperumbadur,
                  Chennai, Tamil Nadu 602105
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                {features.map((obj) => {
                  const Logo = obj.Logo;
                  return (
                    <div className="bg-yellow-100/70 text-yellow-600 lg:px-4 md:px-2 px-4 py-2 flex items-center gap-2 rounded-full font-bold lg:text-base text-xs">
                      <div>
                        <Logo size={20} />
                      </div>
                      <div>{obj.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="lg:w-[400px] md:w-[320px] w-[200px] lg:min-w-[400px] md:min-w-[320px] min-w-[200px] text-center h-full min-h-full shrink-0 pl-8 md:pl-0 md:pb-0">
            <img
              src="/optimized/College2.webp"
              loading="lazy"
              decoding="async"
              alt="SEC"
              className="w-full h-full"
            />
          </div>
          <div className="absolute w-4 bg-yellow-400/20 top-0 left-0 h-full"></div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="px-3 border-l-4 border-l-yellow-400">
          <h3 className="md:text-2xl sm:text-xl text-lg font-bold px-2">
            How to Reach
          </h3>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
          <div className="bg-white p-4 rounded-2xl border-2 border-slate-200 flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <div className="flex items-center bg-yellow-100 border border-yellow-600 text-yellow-600 rounded-full sm:p-4 p-2">
                <AirplaneInFlight size={28} />
              </div>
              <div>
                <span className="font-bold  md:text-xl sm:text-base text-sm">
                  By AIR
                </span>
              </div>
            </div>
            <table className="border-collapse">
              <thead className="bg-gray-200">
                <th className="p-3 lg:text-base text-xs">Airport</th>
                <th className="p-3 lg:text-base text-xs">Distance</th>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-3 text-center lg:text-base text-xs">
                    Chennai International Airport (MAA)
                  </td>
                  <td className="pt-3 text-center lg:text-base text-xs">
                    ≈ 40 km
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white p-4 rounded-2xl border-2 border-slate-200 flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <div className="flex items-center bg-yellow-100 border border-yellow-600 text-yellow-600 rounded-full sm:p-4 p-2">
                <Train size={28} />
              </div>
              <div>
                <span className="font-bold md:text-xl sm:text-base text-sm">
                  By TRAIN
                </span>
              </div>
            </div>
            <table className="border-collapse">
              <thead className="bg-gray-200">
                <th className="p-3 lg:text-base text-xs">Station</th>
                <th className="p-3 lg:text-base text-xs">Distance</th>
              </thead>
              <tbody>
                <tr className="bprder-b-4 border-red-900">
                  <td className="pt-3 text-center lg:text-base text-xs">
                    Chennai Central
                  </td>
                  <td className="pt-3 text-center lg:text-base text-xs">
                    ≈ 42 km
                  </td>
                </tr>
                <tr className="bprder-b-4 border-red-900">
                  <td className="pt-3 text-center lg:text-base text-xs">
                    Tambaram
                  </td>
                  <td className="pt-3 text-center lg:text-base text-xs">
                    ≈ 38 km
                  </td>
                </tr>
                <tr className="bprder-b-4 border-red-900">
                  <td className="pt-3 text-center lg:text-base text-xs">
                    Perambur
                  </td>
                  <td className="pt-3 text-center lg:text-base text-xs">
                    ≈ 45 km
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white sm:p-4 p-2 rounded-2xl border-2 border-slate-200 flex flex-col gap-3 overflow-hidden">
            <div className="flex gap-4 items-center">
              <div className="flex items-center bg-yellow-100 border border-yellow-600 text-yellow-600 rounded-full sm:p-4 p-2">
                <BusFrontIcon size={28} />
              </div>
              <div>
                <span className="font-bold md:text-xl sm:text-base text-sm">
                  By BUS
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="sm:text-sm text-xs text-gray-400">
                Regular bus Service available from major hubs
              </div>
              <table className="border-collapse">
                <thead className="bg-gray-200 lg:text-base text-xs">
                  <th className="p-3">Kilambakkam</th>
                  <th className="p-3">Tambaram</th>
                  <th className="p-3">Poonamallee</th>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="px-3 border-l-4 border-l-yellow-400">
          <h3 className="md:text-2xl sm:text-xl text-lg font-bold px-2">
            VISA
          </h3>
        </div>
        <div>
          Please send an email to conference@saveetha.ac.in for VISA Letter if
          required.
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default TravelsVisaComponent;

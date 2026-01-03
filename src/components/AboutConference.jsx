import { Calendar, LightbulbIcon, WalletMinimalIcon } from "lucide-react";
import React from "react";
import TimelineDate from "./TimelineDate";

function AboutConference() {
  const registration = [
    { name: "Category", amount: "Amount" },
    {
      name: "Academic (Faculty/Research Scholar)",
      amountType: "INR",
      amount: 9000,
    },
    {
      name: "Student(UG/PG)",
      amountType: "INR",
      amount: 8500,
    },
    {
      name: "Industry Delegate",
      amountType: "INR",
      amount: 10000,
    },
    {
      name: "Foreign Authors",
      amountType: "USD",
      amount: 120,
    },
    {
      name: "For Additional Registration",
      amountType: "INR",
      amount: 1000,
    },
  ];
  const formatCurrency = (currency, amount) => {
    const symbols = { INR: "₹", USD: "$" };
    return `${symbols[currency]}${amount.toLocaleString()}`;
  };

  return (
    <section className="md:px-21 sm:px-7 px-3 md:pt-8 sm:py-6 py-4 flex w-full flex-col gap-9 bg-gray-200 lg:pr-10  ">
      <h1 className="lg:text-4xl sm:text-2xl text-lg text-center font-bold">
        International Conference on Innovations in Computing: Exploring the
        Frontiers of Technology (ICICEFT)
      </h1>
      <div className="flex lg:flex-row flex-col lg:gap-20 md:gap-12 gap-8">
        <div className="flex flex-col md:gap-4 sm:gap-4 gap-2 flex-1">
          <h1 className="font-bold xl:text-2xl sm:text-lg text-base">
            About the Conference
          </h1>
          <p className="text-justify flex-1 sm:text-base text-sm">
            The intent of organizing this international conference is to provide
            significant opportunities for academics, researchers, and practicing
            engineers to share scientific knowledge, industrial experiences, and
            research outcomes. The theme of the conference, Recent Advances in
            Computer Science, covers the latest research and techniques applied
            in Engineering, Science, and Technology. This conference also
            provides opportunities to develop networks and collaborations with
            national and international universities and industries. The
            beneficiaries of the conference include faculty members and research
            scholars from academia, as well as developers, contractors, and
            engineers from industry. This conference serves as a platform for
            knowledge sharing and for gaining exposure to the latest
            developments in emerging technologies.
          </p>
        </div>
        <div className="flex w-full justify-center items-center flex-1">
          <div className="flex items-center justify-center text-white">
            <div className="inset-0 bg-gradient-to-br from-gray-950 via-slate-900/90 to-gray-950/95 border-t-4 border-t-yellow-600 flex flex-col justify-between lg:gap-4 gap-4 rounded-xl p-5">
              <div className="flex flex-auto gap-2 justify-between items-center text-yellow-600">
                <div className="flex items-center gap-1 pl-1">
                  <LightbulbIcon className="lg:h-8 lg:w-8 sm:h-7 sm:w-7 h-5 w-5" />{" "}
                  <p className="font-extrabold lg:text-base md:text-lg sm:text-base text-xs underline decoration-yellow-600 underline-offset-4">
                    CONFERENCE THEME
                  </p>
                </div>
              </div>
              <div>
                <p className="lg:text-2xl md:text-2xl sm:text-2xl px-2 font-bold">
                  Recent Advances in{" "}
                  <span className=" text-yellow-600">Computer Science</span>
                </p>
              </div>
              <div>
                <p className="px-2 md:text-base sm:text-base text-sm leading-relaxed text-justify text-gray-300">
                  The theme of the conference is{" "}
                  <span className="text-yellow-500 font-semibold">
                    Recent Advances in Computer Science
                  </span>
                  , which covers the latest research and techniques applied in
                  Engineering, Science, and Technology. The conference provides
                  a platform to develop networks and collaborations with
                  national and international universities and industries,
                  enabling participants to engage with emerging technologies and
                  contemporary research directions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between lg:gap-20 md:gap-12 gap-8">
        <div className="bg-white rounded-xl shadow-lg flex flex-col flex-1">
          <div className="flex flex-col gap-5 md:p-7 py-6 px-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <div className="flex items-center justify-center">
                  <Calendar className="text-yellow-600 h-6 w-6" />
                </div>
                <span className="font-extrabold md:text-xl sm:text-lg text-base">
                  Important Date
                </span>
              </div>
              <div>
                <div className="rounded-full p-2 text-xs  bg-yellow-300/20 text-yellow-600 font-bold border  border-yellow-600">
                  Deadlines
                </div>
              </div>
            </div>
            <div>
              <TimelineDate />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg flex flex-col flex-1 md:gap-5 gap-2 md:p-7 py-6 px-4">
          <div className="flex gap-3">
            <div className="flex items-center justify-center">
              <WalletMinimalIcon className="text-yellow-600 h-6 w-6" />
            </div>
            <span className="font-extrabold md:text-xl sm:text-lg text-base">
              Registration Fees
            </span>
          </div>
          <div className="flex flex-col pt-4 sm:text-base xs:text-sm text-xs">
            {registration.map((obj, ind) => {
              return (
                <div
                  className={`grid grid-cols-2 gap-10 sm:px-5 pl-5 py-4 items-center ${
                    ind === 0
                      ? "bg-slate-200 text-gray-700 font-bold"
                      : ind === registration.length - 1
                      ? "font-extrabold"
                      : ""
                  }`}
                >
                  <div>{ind === 0 ? obj.name.toUpperCase() : obj.name}</div>
                  <div>
                    {ind === 0
                      ? obj.amount.toUpperCase()
                      : formatCurrency(obj.amountType, obj.amount)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutConference;

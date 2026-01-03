import React from "react";
import ImageSection from "../components/ImageSection";
import OrganizingCommiteeSection from "../components/HomePage-Componets/OrganizingCommiteeSection";

function OrganizingCommittee() {
  const patrons = [
    {
      image: "/optimized/Patron1.webp",
      tagName: "Dr. S. Rajesh",
      designation: "Director, SEC",
    },
    {
      image: "/optimized/Patron2.webp",
      tagName: "Dr. Saveetha Rajesh",
      designation: "Director, SMC&H",
    },
  ];
  const organizingSecretary = [
    {
      image: "/optimized/Vijay-Anand.webp",
      tagName: "Dr. M. Vijay Anand",
      designation: "Professor, CSE",
    },
    {
      image: "/optimized/Rajendra-Thilahar.webp",
      tagName: "Dr. C. Rajendra Thilahar",
      designation: "Assistant Professor, CSE",
    },
  ];
  return (
    <section>
      <ImageSection OC={true} />
      <div className="flex flex-col sm:gap-10 gap-5 items-center md:py-10 py-5 w-full">
        <div className="flex items-center justify-between flex-col gap-6 w-full mt-2">
          <h3 className="font-semibold md:text-3xl text-xl">Chief Patron</h3>
          <div className="flex flex-col items-center justify-center gap-5 sm:w-auto w-full">
            <img
              src={"/optimized/Patron.webp"}
              loading="lazy"
              decoding="async"
              alt={"Dr. N. M. Veeraiyan"}
              className="md:h-40 md:w-40 h-28 w-28 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold sm:text-lg text-base text-center">
                {"Dr. N. M. Veeraiyan"}
              </h1>
              <h3 className="text-gray-700 lato-regular sm:text-base text-sm">
                {"Founder & President,SIMATS"}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between flex-col gap-6 w-full mt-2">
          <h3 className="font-semibold md:text-3xl text-xl">Patrons</h3>
          <div className="w-full lg:w-3/4 grid sm:flex sm:justify-between grid-cols-1 gap-8">
            {patrons.map((obj) => {
              return (
                <div
                  className="flex flex-col items-center gap-3 sm:w-3/4 w-full"
                  key={obj.tagName}
                >
                  <img
                    src={obj.image}
                    alt={obj.tagName}
                    loading="lazy"
                    decoding="async"
                    className="md:h-40 md:w-40 h-28 w-28 rounded-full"
                  />
                  <h1 className="font-bold sm:text-lg text-base text-center">
                    {obj.tagName}
                  </h1>
                  <h3 className="text-gray-700 lato-regular sm:text-base text-sm">
                    {obj.designation}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <OrganizingCommiteeSection CommitteePage={true} />
        <div className="flex flex-col justify-center items-center gap-4 w-full pt-5">
          <h3 className="font-semibold md:text-3xl text-xl">
            Organizing Secretary
          </h3>
          <div className="w-full lg:w-3/4 grid sm:flex sm:justify-between grid-cols-1 gap-8">
            {organizingSecretary.map((obj) => {
              return (
                <div
                  className="flex flex-col items-center gap-3 sm:w-3/4 w-full"
                  key={obj.tagName}
                >
                  <img
                    src={obj.image}
                    alt={obj.tagName}
                    loading="lazy"
                    decoding="async"
                    className="md:h-40 md:w-40 h-28 w-28 rounded-full"
                  />
                  <h1 className="font-bold sm:text-lg text-base text-center">
                    {obj.tagName}
                  </h1>
                  <h3 className="text-gray-700 lato-regular sm:text-base text-sm">
                    {obj.designation}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrganizingCommittee;

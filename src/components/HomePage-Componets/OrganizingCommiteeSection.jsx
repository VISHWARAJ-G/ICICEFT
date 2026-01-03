import React from "react";

function OrganizingCommiteeSection({ CommitteePage }) {
  const generalChairs = [
    {
      image: "Faculties/Principal.png",
      tagName: "Dr. V. Vijaya Chamundeeswari",
      designation: "Principal, SEC",
    },
    {
      image: "Faculties/Dean.jpg",
      tagName: "Mr. C. Obed Otto",
      designation: "Associate Dean",
    },
  ];
  const programChairs = [
    {
      image: "Faculties/HoD_CSE.png",
      tagName: "Dr. G. Nagappan",
      designation: "Professor & Head, CSE",
    },
    {
      image: "Faculties/HoD_AIDS.png",
      tagName: "Dr.G.Karthi",
      designation: "Associate Professor & Head, AIDS",
    },
    {
      image: "Faculties/Nalini-priya.jpg",
      tagName: "Dr.G.Nalini Priya",
      designation: "Professor, IT",
    },
  ];
  return (
    <div className={`${!CommitteePage ? "sm:px-10 px-2 py-20" : "w-full"} flex flex-col items-center justify-center sm:gap-10 gap-5`}>
      {!CommitteePage && <h1 className="font-bold md:text-4xl sm:text-2xl text-xl">
        Organizing Team
      </h1>}
      <div className="flex items-center justify-between flex-col gap-6 w-full mt-2">
        <h3 className="font-semibold md:text-3xl text-xl">
          General Chairs
        </h3>
        <div className="w-full lg:w-3/4 grid sm:flex sm:justify-between grid-cols-1 gap-8">
          {generalChairs.map((obj) => {
            return (
              <div
                className="flex flex-col items-center gap-3 sm:w-3/4 w-full"
                key={obj.tagName}
              >
                <img src={obj.image} alt={obj.tagName} className="md:h-40 md:w-40 h-28 w-28" />
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

      <div className="flex items-center justify-center flex-col gap-6 mt-6">
        <h3 className="font-semibold md:text-3xl text-xl">
          Conference Chair
        </h3>
        <div className="w-full grid sm:flex sm:justify-center grid-cols-1 gap-8">
          <div className="flex flex-col items-center justify-center gap-3 sm:w-auto w-full">
            <img
              src={"Faculties/HoD_IT.jpg"}
              alt={"Dr. K. Suresh Kumar"}
              className="md:h-40 md:w-40 h-28 w-28"
            />
            <h1 className="font-bold sm:text-lg text-base text-center">
              {"Dr. K. Suresh Kumar"}
            </h1>
            <h3 className="text-gray-700 lato-regular sm:text-base text-sm">
              {"Professor & Head, IT"}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-between gap-6 mt-6 px-5">
        <h3 className="font-semibold md:text-3xl text-xl">
          Program Chairs
        </h3>
        <div className="grid md:flex md:justify-between grid-cols-1 gap-8 lg:w-3/4 w-full">
          {programChairs.map((obj) => {
            return (
              <div
                className="flex flex-col items-center gap-3"
                key={obj.tagName}
              >
                <img src={obj.image} alt={obj.tagName} className="md:h-40 md:w-40 h-28 w-28" />
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
  );
}

export default OrganizingCommiteeSection;

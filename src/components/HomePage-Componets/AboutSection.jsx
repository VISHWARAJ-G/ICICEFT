import { VerifiedIcon } from "lucide-react";
import React from "react";
import { tracksList } from "../../services/Tracks";

function AboutSection() {
  const gridVals = tracksList
  return (
    <section className="px-6 py-10 gap-5 w-full grid lg:grid-cols-2 grid-cols-1">
      <div className="">
        <h1 className="font-bold md:text-4xl sm:text-2xl text-xl">
          About the Conference
        </h1>
        <div className="mb-6 mt-2 text-justify sm:text-lg text-sm flex flex-col gap-3 lato-regular">
          <p>
            The intent of organizing the international conference is to provide
            tremendous opportunities to academics, researchers, and practicing
            engineers to share the scientific knowledge, industrial experiences,
            and research outcomes. The theme of the conference is Recent
            Advances in Computer Science which covers the latest research and
            techniques applied in Engineering, Science and Technology.{" "}
          </p>
          <p>
            This also provides an opportunity to develop networks and
            collaborations with International and National Universities and
            Industries. The beneficiaries of the conference are faculties and
            research scholars from academia and developers, contractors, and
            engineers from industry. This would be a platform for knowledge
            sharing and getting acquainted with the latest developments in the
            emerging technologies.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 border border-slate-300 lato-regular rounded-xl flex flex-col gap-6 p-4">
        <h3 className="font-bold sm:text-xl text-lg">Conference Tracks</h3>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 sm:text-base text-sm">
          {gridVals.map((vals) => {
            return (
              <div className="flex gap-2 items-center" key={vals}>
                <div className="flex-none flex items-center justify-center h-6 w-6">
                  <VerifiedIcon className="text-xs h-6 w-6 text-yellow-400" />
                </div>
                <p className="lato-regular">{vals}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

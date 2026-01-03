import React from "react";
import MapEmbed from "../components/MapEmbed";
import ImageSection from "../components/ImageSection";

function ContactUs() {
  return (
    <>
      <ImageSection Contact={true} />
      <div className="flex flex-col gap-5 items-center justify-center p-6 bg-gray-200">
        <h2 className="text-2xl font-bold">Location</h2>
        <MapEmbed />
      </div>
    </>
  );
}

export default ContactUs;

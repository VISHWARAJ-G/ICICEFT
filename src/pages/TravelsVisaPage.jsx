import React from "react";
import ImageSection from "../components/ImageSection";
import TravelsVisaComponent from "../components/TravelsVisaComponent";

function TravelsVisaPage() {
  return (
    <>
      <ImageSection TVPage={true} />
      <TravelsVisaComponent />
    </>
  );
}

export default TravelsVisaPage;

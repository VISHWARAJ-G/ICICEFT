import React from "react";
import ImageSection from "../../components/ImageSection";
import AboutSEC from "../../components/AboutPage-Components/AboutSEC";

function AboutSecPage() {
  return (
    <>
      <ImageSection
        LandingPage={false}
        Sec={true}
        Department={false}
        Conference={false}
      />
      <AboutSEC />
    </>
  );
}

export default AboutSecPage;

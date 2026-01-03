import React from "react";
import ImageSection from "../components/ImageSection";
import AboutConference from "../components/AboutConference";

function AboutConferencePage() {
  return (
    <div>
      <ImageSection
        Sec={false}
        Department={false}
        Conference={true}
        LandingPage={false}
      />
      <AboutConference />
    </div>
  );
}

export default AboutConferencePage;

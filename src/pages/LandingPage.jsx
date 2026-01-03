import React from "react";
import ImageSection from "../components/ImageSection";
import AboutSection from "../components/HomePage-Componets/AboutSection";
import TimelineSection from "../components/HomePage-Componets/TimelineSection";
import OrganizingCommiteeSection from "../components/HomePage-Componets/OrganizingCommiteeSection";

function LandingPage() {
  return (
    <>
      <ImageSection
        LandingPage={true}
        Sec={false}
        Department={false}
        Conference={false}
      />
      <AboutSection />
      <TimelineSection />
      <OrganizingCommiteeSection CommitteePage={false} />
    </>
  );
}

export default LandingPage;

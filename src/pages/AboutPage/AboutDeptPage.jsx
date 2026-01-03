import React from "react";
import ImageSection from "../../components/ImageSection";
import AboutDept from "../../components/AboutPage-Components/AboutDept";

function AboutDeptPage() {
  return (
    <div>
      <ImageSection
        LandingPage={false}
        Department={true}
        Sec={false}
        Conference={false}
      />
      <AboutDept />
    </div>
  );
}

export default AboutDeptPage;

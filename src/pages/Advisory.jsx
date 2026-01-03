import React from "react";
import ImageSection from "../components/ImageSection";
import AdvisoryMembers from "../components/AdvisoryMembers";

function Advisory({ AdvisoryCommittee, IAdvisory, NAdvisory }) {
  return (
    <div>
      <ImageSection IAdvisory={IAdvisory} NAdvisory={NAdvisory} />
      <AdvisoryMembers
        AdvisoryCommittee={AdvisoryCommittee}
        IAdvisory={IAdvisory}
      />
    </div>
  );
}

export default Advisory;

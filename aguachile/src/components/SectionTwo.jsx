import React from "react";
import OverfloContainer from "./SectionTwoComp/OverfloContainer";
import PromosContainer from "./SectionTwoComp/PromosContainer";

const SectionTwo = () => {
  return (
    <section className="main-container-menu">
      <PromosContainer />
      <OverfloContainer />
    </section>
  );
};

export default SectionTwo;

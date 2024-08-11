import React from "react";
import DeveloperCard from "../components/DeveloperCard";
// import Contribute from "../components/Contribute";
import devData from "../assets/devData";
import { MainLayout } from "../layouts";

import "../styles/ourteam.css";
import InfoSection from "../components/InfoSection";

// /** functionality for loading developer cards components, and the contribute components **/
export default function OurTeam() {
  const devCards = [];

  for (const [name, value] of Object.entries(devData)) {
    devCards.push(
      <DeveloperCard name={name} value={value}>
      </DeveloperCard>,
    );
  }
  devCards.reverse();

  return (
    <MainLayout title="ourteam">
      <div className="ourteam__container">
        <InfoSection
          title="About OverVue"
          description="OverVue is an Open Source prototyping tool that enables developers to seamlessly build & visualize Vue applications."
        />
        <InfoSection
          title="Want to contribute?"
          description="Visit our repository and help make Vue prototyping better!"
        />
        <div className="devCards">
          <h5 className="dev__contributor__title">Contributors</h5>
          <div className="dev__container">{devCards}</div>
        </div>
      </div>
    </MainLayout>
  );
}

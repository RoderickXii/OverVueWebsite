import React from "react";
import FeatureCard from "../components/FeatureCard";
import "../styles/landingPage.css";

export const WhatsNew = () => {
  return (
    <div className="whatsNew">
      <div className="whatsNew__header">What&apos;s new in OverVue?</div>
      <div className="feature__container">
        <FeatureCard
          title="Now Supporting Windows and Linux Platforms"
          description="Windows and Linux users now have the ability to download and set up OverVue."
        />
        <FeatureCard
          title="Boilerplate Code Generation"
          description="Toggle between Options and Composition API displayed in the boilerplate code generator!"
        />
        <FeatureCard
          title="Pinia State Library Integration"
          description="Following Vue's recommend, default state manager is Pinia."
        />
      </div>
    </div>
  );
};

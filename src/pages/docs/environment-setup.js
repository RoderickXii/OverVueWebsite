import React from "react";
import { LayoutWithSidebar } from "../../components/layouts";
// import "../../styles/docs.css";
import GridDensity from "../../assets/doc-data/GridDensity.jpg";
import OptionsPullDown from "../../assets/doc-data/optionspulldown.jpg";
import SlackOAuth from "../../assets/doc-data/SlackOAuth.jpg";
import toggleMode from "../../assets/doc-data/toggleMode.jpeg";

// import HeadTwoStyle from "../../styles/HeadTwoStyle.js";
// import styled from "styled-components";
export default function EnvironmentSetup() {
  return (
    <LayoutWithSidebar>
      <div className="docs__content">
        <h2>Setting Up Your OverVue Environment</h2>
        <br />
        <p>
          OverVue 11.0 offers a versatile and powerful toolset designed to make
          your tasks easier and more efficient.
        </p>
        <p>
          One of the standout features of our application is its dual operating
          mode, offering you two distinct ways to visualize and build your
          component structure: <strong> Tree Mode</strong> and{" "}
          <strong>Grid Mode.</strong>
        </p>
        <br />
        <div>
          <div>
            <h3>Toggle between Tree Mode and Grid Mode</h3>
            <p>
              Switch between Tree Mode & Grid Mode by clicking on the gear icon
              in the upper-right corner.
            </p>
            <img
              src="https://live.staticflickr.com/65535/53167957178_c262e14f29.jpg"
              width="500"
              height="73"
              alt="toggleMode"
            />
            <br />
            <br />

            <img
              src="https://live.staticflickr.com/65535/53167471681_61021973f3_h.jpg"
              width="650vh"
              height="350vh"
              alt="modes"
            />
            <br />
            <br />
            <p>
              <em>
                Please note that some functionality in Grid Mode may be disabled
                or broken, as this view is now considered deprecated.
              </em>
              <br />
              <br />
            </p>
            <h3>Code Generator Views in Options and Composition API</h3>
            <p>
              Another noteworthy feature introduced with the version 11.0 update
              is users now have the ability to toggle between displaying their
              code template in <strong>Options</strong> or{" "}
              <strong>Compositions</strong> API, ensuring consistency between
              the visual prototype and the actual implementation.
            </p>
            <br />
            <img
              alt="options-compAPI"
              className="giphy-embed"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWxoMnNoaHp4MThoOWtvem45b2c2MDVzcmd2ZngxbTBvNm5zYXV0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Knz7Otco4dAPV89Enh/giphy.gif"
              style={{ maxWidth: "250px" }}
            />
            <br />
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}

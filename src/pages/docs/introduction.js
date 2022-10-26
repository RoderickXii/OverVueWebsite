import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function Introduction() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Introduction</h2>
        <p>OverVue is a developer tool that allows you to seemlessly create and visualize a Vue application with expansive prototyping, a real-time, intuitive tree display of routing and component hierarchy, and live-generated, exportable boilerplate code. The best way to get started is by following our new user tutorial.</p>
        <h3 >Key Features</h3>​
        <ul className="minusMargin">
          <li>
            Quickly produce product prototypes with your choice of custom or Element Plus library components. 
          </li>
          <li>
            Customize your prototype with snap-to-grid positioning and component color and sizing.
          </li>
          <li>
            Visualize and manipulate project routing, component hierarchies, and code snippets in real time.
          </li>
          <li>
            Export custom boilerplate code for Vue 3.0 applications including neccessary npm packages, Oauth login of your choice, customized Vue SFC's, and component testing files.
          </li>
          <li>
            Share project updates with your team via Slack.
          </li>
        </ul>

        <h3>Installation</h3>
        <p>OverVue is compatible with both MacOS and WSL. Quickly install and set up using the quickstart guide for your operating system below.</p>
        <h3>Installation Instructions</h3>
        <div>
          <p>1. Download the desktop App on the main landing page.</p>
          <p>2. Extract the .zip file.</p>
          <p>3. Run the .exe file called "OverVue.exe".</p>
        </div>


        <h3>New to Vue 9.0</h3>
        <p>
        Vue 9.0 now utilizes Composition API, TypeScript compatibility, and Pinia, Vue's official state management library. Improved on Parent-Children relationship and HTML nesting functionality for export and code-snippets.
        </p>
      </div>
    </DocsLayout>
  );
}

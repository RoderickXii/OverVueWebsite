import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";
import Codesnippet from "../../assets/doc-data/Codesnippet.jpg"

export default function ComponentStyling() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Component Styling</h2>
        <p>After adding a component class name, under the component details tab, you can access details about the active/selected component - including a code snippet (live generated boilerplate code), the HTML elements, state, actions or props in the component. The code snippet dynamically renders grid area position, color, and size of the component. Additionally OverVue can now make use of the popular Vue component Library Element Plus.</p>
        <img className="gif" alt="codesnippet" src={Codesnippet}></img>
        {/* <h3>Positioning and Snap to Grid</h3>
        <h3>Color Updates</h3>
        <h3>Size Updates</h3>
        <h3>Using Element Plus Components</h3>​ */}
      </div>
    </DocsLayout>
  );
}
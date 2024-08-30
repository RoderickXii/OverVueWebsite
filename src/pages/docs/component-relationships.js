import React from "react";
import { LayoutWithSidebar } from "../../components/layouts";
// import "../../styles/docs.css";
import ComponentHierarchy from "../../assets/doc-data/componentHierarchy.jpg";

export default function Routes() {
  return (
    <LayoutWithSidebar>
      <div className="docs__content">
        <h2>Component Relationships</h2>
        <div className="desc">
          <div>
            <h3>Create new routes</h3>
            <p>
              You can find all of your routes in the Routes tab. To add a route,
              enter the name in the input field and click the &quot;+&quot;, or
              press enter. Once added, you can click on a route to navigate to
              it. To delete a route, click on the &quot;x&quot; on the right
              side of the route block.{" "}
            </p>
            <p>Note: The default route, HomeView, cannot be deleted!</p>
          </div>
          <img
            className="gif"
            alt="Routes"
            src="https://media.giphy.com/media/ptfGbJdSUODKZXY6XO/giphy.gif"
          ></img>
        </div>
        <div className="desc">
          <div>
            <h3>Visualize component hierarchies in real time</h3>
            <p>
              The central user interface in Tree Mode (the default view) gives
              you a visual representation of how routes and components relate to
              one another.{" "}
            </p>
            <p>
              You can navigate to a specific component or route by clicking on
              its node within the tree.
            </p>
          </div>
          <img
            className="gif"
            alt="Tree1"
            src="https://live.staticflickr.com/65535/53169434723_70b6cf748c_b.jpg"
          />
        </div>
        <div>
          <h3>Drag & drop components</h3>
          <p>
            Drag and drop tree nodes to update route/component relationships.
            Changes made in Tree Mode will be dynamically updated in Code
            Preview and reflected in any exported files.
          </p>
          <img
            alt="Tree Mode Gif"
            className="gif"
            src="https://media.giphy.com/media/ZulevY0tBZnUOCDpY7/giphy.gif"
          />
          <br />
          <br />
          <h3>Editing in Grid Mode</h3>
          <p>
            OverVue version 10 enhances the developer experience by setting Tree
            Mode as the application&apos;s default user interface.
          </p>
          <p>
            {" "}
            Though &quot;canvas view&quot; (of previous versions) has been
            deprecated in the form of &quot;Grid Mode&quot;, users can still
            access this feature by clicking on the gear icon in the upper-right
            corner and toggling modes.
          </p>
          <img
            src="https://live.staticflickr.com/65535/53169233931_140e2e64f3_c.jpg"
            className="gif"
            alt="grid features"
          />
          <br />
        </div>
        <p></p>
      </div>
    </LayoutWithSidebar>
  );
}

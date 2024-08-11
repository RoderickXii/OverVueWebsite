import React from "react";
import "../styles/base.css";

// loading Demo
export const WebApp = () => {
  return (
    <div className=" black" id="webapp">
      <h1>
        Light Demo{" "}
        <span role="img" aria-label="point">
          👇
        </span>
      </h1>
      <div className="m-1">
        <iframe
          title="iframe"
          className="iframe"
          src="https://d3jjiewd1t2yhm.cloudfront.net"
        />
      </div>
    </div>
  );
};

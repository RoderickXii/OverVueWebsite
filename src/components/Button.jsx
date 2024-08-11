import React from "react";

export default function Button(props) {
  return (
    <a
      className="Button"
      href={props.url}
      download
      role="button"
      aria-label={`Download for ${props.name}`}
    >
      Download for {props.name}
    </a>
  );
}

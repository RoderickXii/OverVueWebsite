import React from "react";

export default function DeveloperCard({ name, value }) {
  return (
    <article className="dev__card" aria-labelledby={`dev-name-${name}`}>
      <img src={value.img} alt={name} className="dev__pic" />
      <p className="dev__name">{value["dev-name"]}</p>
      <a
        className="dev__link"
        href={value["github-link"]}
        aria-label={`GitHub profile of ${name}`}
      >
        {value["github-handle"]}
      </a>
    </article>
  );
}

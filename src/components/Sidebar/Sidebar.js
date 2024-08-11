import { Link } from "gatsby";
import React from "react";
import "../../styles/sidebar.css";
export default function Sidebar({ links }) {
  // console.log(links);
  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <h3>Getting Started</h3>
        {links.getting_started.map(({ label, link }) => (
          <Link className="sidebar__link" to={link} key={link}>
            {label}
          </Link>
        ))}
        <h3>Guides</h3>
        {links.guides.map(({ label, link }) => (
          <Link className="sidebar__link" to={link} key={label}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

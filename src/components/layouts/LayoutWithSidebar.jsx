// react layout for docs page including persistant top navbar and sidebar

import React from "react";
import { links } from "../../data/sidebar-links";
import { Helmet } from "react-helmet";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Sidebar } from "../Sidebar";
// import "../styles/base.css";
// import "../styles/docs-layout.css";

export default function LayoutWithSideBar({ children, title }) {
  return (
    <div id="layout__withSideBar">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <Sidebar links={links} />
      <div className="mainContainer">{children}</div>
      {/* <div className="docs__body">
        <Sidebar links={links} />
        {children}
      </div> */}
      <Footer />
    </div>
  );
}

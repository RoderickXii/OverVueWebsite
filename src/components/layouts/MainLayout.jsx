// provide default layout for all pages with navbar and footer. No Sidebar
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
// import "../styles/base.css"; // Ensure the CSS file is imported for use

export default function MainLayout({ children, title }) {
  return (
    <div className="mainLayout">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <div className="mainContainer">{children}</div>
      <Footer />
    </div>
  );
}

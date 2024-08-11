// react layout for docs page including persistant top navbar and sidebar

import React from "react";
import { links } from "../data/sidebar-links";
import Navbar from "../components/layout/Navbar";
import { Sidebar } from "../components/Sidebar";
import "../styles/base.css";
import "../styles/docs-layout.css";

export default function LayoutWithSideBar({ children, title }) {
  return (
    <div className="layout_with_sideBar">
      <Navbar />
      <div className="docs__body">
        <Sidebar links={links} />
        {children}
      </div>
    </div>
  );
}

// export default function MainLayout({ children, title }) {
//   return (
//     <div className="mainLayout">
//       <Helmet>
//         <title>{title}</title>
//         <link rel="preload" href="/styles/base.css" as="style" />
//       </Helmet>
//       <Navbar />
//       {children}
//       <Footer />
//     </div>
//   );
// }

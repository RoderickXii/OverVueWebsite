/* content for hero of me page including OverVue banner, download buttons */

import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import main from "../assets/logo/v11White.png";
import { downloadLinks } from "../data/download-links";
import "../styles/landingPage.css";

/** Downloads application for windows and mac
    main title and delay of words appearing  **/
export const Hero = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const button = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="hero">
      <img alt="OverVue logo" id="mainLogo" src={main} />

      <motion.p
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1 }}
        className="subtitle"
        role="textbox" // ARIA role for text
      >
        An{" "}
        <strong>
          <em>intuitive</em>
        </strong>{" "}
        Vue prototyping tool
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={button}
        transition={{
          delay: 2,
          x: { type: "inertia", stiffness: 50 },
          default: { duration: 1 },
        }}
        role="region" // ARIA role for a region of the page
        aria-labelledby="download-buttons" // Reference to the label
      >
        <div className="button-list" id="download-buttons">
          <Button name="Mac" url={downloadLinks.macOS} />
          <Button name="Linux" url={downloadLinks.linux} />
          <Button name="Windows" url={downloadLinks.windows} />
          <div className="aurora-1"></div>
        </div>
      </motion.div>
    </div>
  );
};

import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socialsList">
        <a
          href="https://github.com/open-source-labs/OverVue"
          aria-label="OverVue's GitHub"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon fontSize="large" className="social__icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/overvue-10/"
          aria-label="Overvue's LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" className="social__icon" />
        </a>
      </div>
      <div className="footer__textWrapper">
        <h4 className="footer__text">
          OverVue is licensed under the MIT License.
        </h4>
        <h4 className="footer__text">
          OverVue is an open-source project developed under tech accelerator:{" "}
          <a
            href="https://opensourcelabs.io/"
            aria-label="OS Labs"
            rel="noopener noreferrer"
            target="_blank"
            className="footer__link"
          >
            OS Labs
          </a>
          .
        </h4>
      </div>
    </footer>
  );
}

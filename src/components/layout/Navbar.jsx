import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from "../../assets/logo/logoIcon.svg";
// import "./navbar.css";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";

// OG Nav Bar
export default function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [starsCount, setStarsCount] = useState("");

  // Fetch Github stars at runtime
  const defaultStars = "2.3k"; // Use this number if github fetch fails

  useEffect(() => {
    // Check localStorage for starCount, if present use that starsCount
    const localStorageStars = JSON.parse(
      window.localStorage.getItem("starsCount"),
    );
    if (localStorageStars) {
      setStarsCount(localStorageStars + "k");
    }
    // Retrieve from Github if not present
    else {
      // Fetch data from Github api
      fetch("https://api.github.com/repos/open-source-labs/OverVue")
        .then((response) => {
          console.log("fetching stars...");
          if (response.status === 403) {
            throw new Error("403 error");
          } else return response.json();
        })
        .then((data) => {
          const starsRounded = (data.stargazers_count / 1000).toFixed(1);
          window.localStorage.setItem("starsCount", starsRounded);
          setStarsCount(starsRounded + "k");
        })
        .catch((error) => {
          console.log(error);
          setStarsCount(defaultStars);
        });
    }
  }, []);

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <Link className="nav_logo" to={"/"} aria-label="Home">
        <img className="navbar__logo" src={logo} alt={"logo"} />
      </Link>
      <div className="navbar__actions" id={showNavLinks ? "hidden" : ""}>
        <Link className="navbar__actions__docs" to={"/docs/introduction"}>
          Docs
        </Link>
        <Link className="navbar__actions__ourTeam" to={"/our-team"}>
          About Us
        </Link>
        <a
          className="navbar__actions__blog"
          href="https://medium.com/@robsinzieri_64078/boost-your-productivity-and-efficiency-in-vue-js-3cea76cd97c3"
        >
          Blog
        </a>
        <a
          className="navbar__actions__github"
          id="github-btn"
          href="https://github.com/open-source-labs/OverVue"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
      {/* <IconButton
        className="ham-btn"
        onClick={() => setShowNavLinks(!showNavLinks)}
      >
        <MenuIcon />
      </IconButton> */}
    </nav>
  );
}

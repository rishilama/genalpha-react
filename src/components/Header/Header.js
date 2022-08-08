import SidebarVisibilityContext from "../../store/SidebarVisibilityContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [sidebarVisibility, , toggleSidebarVisibility] = useContext(
    SidebarVisibilityContext
  );

  return (
    <header>
      <div className="bg-color">
        <div className="container">
          <div className="nav">
            <div className="nav-logo">
              <Link to="/">
                <img src="/img/Logo3.png" alt="site-logo" className="logo" />
              </Link>
            </div>

            <div
              onClick={toggleSidebarVisibility}
              className={`menu-toggle ${sidebarVisibility ? "active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className="link"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0});
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="link"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0});
                  }}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="link"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0});
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="link"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0});
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="site-header_nav-links">
            <ul className={`nav-right ${sidebarVisibility ? "active" : ""}`}>
              <li>
                <Link
                  className="nav-right_link"
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0});
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-right_link"
                  to="/courses"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0});
                  }}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  className="nav-right_link"
                  to="/about"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0});
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="nav-right_link"
                  to="/contact"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0});
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

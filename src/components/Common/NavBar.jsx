import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Desktop, Mobile } from "../../MediaQuery/useMediaQuery";

const NavBar = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const onClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Desktop>
        <Nav>
          <Link to="/home">
            <img
              src={`${process.env.REACT_APP_IMAGE_URL}/Logo.svg`}
              alt="Logo"
            />
          </Link>
          <ul>
            <li>
              <Link
                onClick={onClick}
                to="/home"
                className={location.pathname === "/home" ? "active" : ""}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                onClick={onClick}
                to="/project"
                className={location.pathname === "/project" ? "active" : ""}
              >
                PROJECT
              </Link>
            </li>
            <li>
              <Link
                onClick={onClick}
                to="/recruitment"
                className={location.pathname === "/recruitment" ? "active" : ""}
              >
                RECRUITMENT
              </Link>
            </li>
            <li>
              <Link
                onClick={onClick}
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </Nav>
      </Desktop>
      <Mobile>
        <MobileNav>
          <RowBox>
            <Link to="/home">
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}/Logo.svg`}
                alt="Logo"
              />
            </Link>
            <img
              src={`${process.env.REACT_APP_IMAGE_URL}/hamburger.svg`}
              alt="hamburger"
              onClick={toggleSidebar}
              style={{ width: "3rem" }}
            />
          </RowBox>
          {showSidebar && (
            <Sidebar className="sidebar" ref={sidebarRef}>
              <ul>
                <li>
                  <Link
                    onClick={closeSidebar}
                    to="/home"
                    className={location.pathname === "/home" ? "active" : ""}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeSidebar}
                    to="/project"
                    className={location.pathname === "/project" ? "active" : ""}
                  >
                    PROJECT
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeSidebar}
                    to="/recruitment"
                    className={
                      location.pathname === "/recruitment" ? "active" : ""
                    }
                  >
                    RECRUITMENT
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeSidebar}
                    to="/contact"
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </Sidebar>
          )}
          {showSidebar && (
            <SidebarOverlay onClick={() => setShowSidebar(false)} />
          )}
        </MobileNav>
      </Mobile>
    </>
  );
};

export default NavBar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* padding: 4rem 3rem 2rem; */
  background-color: #111111;
  color: white;
  padding-bottom: 2rem;
  z-index: 1000;
  height: 120px;
  width: 100vw;
  img {
    padding-top: 30px;
    width: 30rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0 7rem;
  }

  li {
    font-size: 5rem;
    margin: 0 3rem;
  }

  a {
    text-decoration: none;
    color: white;

    &.active {
      color: #eb9537;
    }
  }
`;

const MobileNav = styled.div`
  /* position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000; */
  display: flex;
  padding: 2rem;
  background-color: #111111;
  color: white;
  flex-direction: column;

  img {
    width: 20rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 3rem;
    margin: 1rem 0;
  }

  a {
    text-decoration: none;
    color: white;

    &.active {
      color: #eb9537;
    }
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background: rgba(17, 17, 17, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  z-index: 1000;
  padding-top: 30%;
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; // 다른 요소보다 위에 올라가도록
`;

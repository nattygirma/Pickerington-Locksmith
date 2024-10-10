"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ModeSwitch from "../ModeSwitch";
import ModeSwitchDark from "../ModeSwitchDark";
import Button from "../Button";
// import DropDown from "./DropDown";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import Icon from "../Icon";
import logoUrl from '../../../../public/images/resumeZ-dark-logo.png';
import darkLogoUrl from '../../../../public/images/resumeZ-logo.png';

export default function Header({
  varient,
  menuPosition,
}) {


  const pathname = usePathname();
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

    // Close mobile menu when route changes
    useEffect(() => {
      setMobileToggle(false); // Close the menu when the route changes
    }, [pathname]);
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  return (
    <header
      className={` nk-header-main nk-menu-main will-shrink ignore-mask ${
        mobileToggle ? "header-menu-shown" : ""
      } ${varient ? varient : ""} ${isSticky ? "has-fixed" : ""}`}
    >
      <div className="container">
        <div className="nk-header-wrap">
          <div className="nk-header-logo">
            {/* <Logo logoUrl={logoUrl} darkLogoUrl={darkLogoUrl} href="/" width={145}/> */}
            <div className="namelogo">
            <h3>Pickerington Local Locksmith</h3>
            </div>
          </div>
 
          <div className="nk-header-toggle">
            <button
              className="btn btn-light btn-icon header-menu-toggle"
              onClick={() => !setMobileToggle(!mobileToggle)}
            >
              <Icon icon="menu" className="icon" />
            </button>
          </div>
          {mobileToggle && (
            <div
              className="header-menu-overlay"
              onClick={() => setMobileToggle(!mobileToggle)}
            />
          )}

          <nav
            className={`nk-header-menu nk-menu ${
              mobileToggle ? "header-menu-active" : ""
            }`}
          >
                     {/* {darkMode ? (
              <ModeSwitchDark initialDarkMode={darkMode} />
            ) : (
              <ModeSwitch initialDarkMode={darkMode} />
            )} */}
          <ul
              className={`nk-menu-list ${
                menuPosition ? menuPosition : "mx-auto"
              }`}
            >
              
              <li
                className={`nk-menu-item ${
                  pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nk-menu-link" href="/">
                  Home
                </Link>
              </li>
              <li
                className={`nk-menu-item ${
                  pathname === "/automotive" ? "active" : ""
                }`}
              >
                  <Link className="nk-menu-link" href="/automotive" onClick={() => setMobileToggle(false)}>
                  Automotive
                </Link>
              </li>
              <li
                className={`nk-menu-item ${
                  pathname === "/residential" ? "active" : ""
                }`}
              >
                <Link href="/residential" className="nk-menu-link">
                  <span className="nk-menu-text">Residential</span>
                </Link>
              </li>

              <li         className={`nk-menu-item ${
                  pathname === "/commercial" ? "active" : ""
                }`}>
              <Link href="/commercial" className="nk-menu-link">
                  <span className="nk-menu-text">Commercial</span>
                </Link>
              </li>
              <li         className={`nk-menu-item ${
                  pathname === "/contact" ? "active" : ""
                }`}>
              <Link href="/contact" className="nk-menu-link">
                  <span className="nk-menu-text">Contact Us</span>
                </Link>
              </li>
            </ul>
            </nav>

    
        </div>
      </div>
    </header>
  );
}

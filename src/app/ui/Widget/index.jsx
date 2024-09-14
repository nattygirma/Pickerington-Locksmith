'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ModeSwitch from '../ModeSwitch';
import ModeSwitchDark from '../ModeSwitchDark';
import Button from '../Button';
import DropDown from './DropDown';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';
import Icon from '../Icon';

export default function Header({
  darkMode,
  varient,
  logoUrl,
  darkLogoUrl,
  language,
  loginBtn,
  actionBtnText,
  actionBtnUrl,
  actionBtnClass,
  menuPosition,
}) {
  const pathname = usePathname();
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  return (
    <header
      className={`nk-header-main nk-menu-main will-shrink ignore-mask ${
        mobileToggle ? 'header-menu-shown' : ''
      } ${varient ? varient : ''} ${isSticky ? 'has-fixed' : ''}`}
    >
      <div className="container">
        <div className="nk-header-wrap">
          <div className="nk-header-logo">
            <Logo logoUrl={logoUrl} darkLogoUrl={darkLogoUrl} href="/" />
          </div>
          <div className="nk-header-toggle">
            {darkMode ? (
              <ModeSwitchDark initialDarkMode={darkMode} />
            ) : (
              <ModeSwitch initialDarkMode={darkMode} />
            )}
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
              mobileToggle ? 'header-menu-active' : ''
            }`}
          >
            <ul
              className={`nk-menu-list ${
                menuPosition ? menuPosition : 'mx-auto'
              }`}
            >
              <li className="nk-menu-item has-dropdown">
                <DropDown menuTitle="Home">
                  <ul className="nk-menu-sub">
                    <li
                      className={`nk-menu-item ${
                        pathname === '/' ? 'active' : ''
                      }`}
                    >
                      <Link className="nk-menu-link" href="/" target="_blank">
                        Home S1
                      </Link>
                    </li>
                    <li
                      className={`nk-menu-item ${
                        pathname === '/index-s2' ? 'active' : ''
                      }`}
                    >
                      <Link
                        className="nk-menu-link"
                        href="/index-s2"
                        target="_blank"
                      >
                        Home S2
                      </Link>
                    </li>
                    <li
                      className={`nk-menu-item ${
                        pathname === '/index-s3' ? 'active' : ''
                      }`}
                    >
                      <Link
                        className="nk-menu-link"
                        href="/index-s3"
                        target="_blank"
                      >
                        Home S3
                      </Link>
                    </li>
                    <li
                      className={`nk-menu-item ${
                        pathname === '/index-s4' ? 'active' : ''
                      }`}
                    >
                      <Link
                        className="nk-menu-link"
                        href="/index-s4"
                        target="_blank"
                      >
                        Home S4
                      </Link>
                    </li>
                    <li
                      className={`nk-menu-item ${
                        pathname === '/index-s5' ? 'active' : ''
                      }`}
                    >
                      <Link
                        className="nk-menu-link"
                        href="/index-s5"
                        target="_blank"
                      >
                        Home S5
                      </Link>
                    </li>
                    <li
                      className={`nk-menu-item ${
                        pathname === '/index-s6' ? 'active' : ''
                      }`}
                    >
                      <Link
                        className="nk-menu-link"
                        href="/index-s6"
                        target="_blank"
                      >
                        Home S6
                        <div className="badge bg-primary ms-2 me-n4 px-2 rounded-pill">
                          New
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`nk-menu-item ${
                        pathname === '/index-s7' ? 'active' : ''
                      }`}
                    >
                      <Link
                        className="nk-menu-link"
                        href="/index-s7"
                        target="_blank"
                      >
                        Home S7
                        <div className="badge bg-primary ms-2 me-n4 px-2 rounded-pill">
                          New
                        </div>
                      </Link>
                    </li>
                  </ul>
                </DropDown>
              </li>
              <li
                className={`nk-menu-item ${
                  pathname === '/usecase' ? 'active' : ''
                }`}
              >
                <Link href="/usecase" className="nk-menu-link">
                  <span className="nk-menu-text">Use Cases</span>
                </Link>
              </li>
              <li
                className={`nk-menu-item ${
                  pathname === '/features' ? 'active' : ''
                }`}
              >
                <Link href="/features" className="nk-menu-link">
                  <span className="nk-menu-text">Features</span>
                </Link>
              </li>
              <li className="nk-menu-item has-dropdown">
                <DropDown menuTitle="Pages" megaMenuClass="nk-menu-mega">
                  <div className="nk-menu-mega-wrap">
                    <ul className="nk-menu-sub">
                      <li
                        className={`nk-menu-item ${
                          pathname === '/about' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/about">
                          About
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/usecase' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/usecase">
                          Use Case
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname.startsWith('/usecase/') ? 'active' : ''
                        }`}
                      >
                        <Link
                          className="nk-menu-link"
                          href="/usecase/usecase-details"
                        >
                          Use Case Details
                          <div className="badge bg-primary ms-2 me-n4 px-2 rounded-pill">
                            New
                          </div>
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/usecase-s2' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/usecase-s2">
                          Use Case S2
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname.startsWith('/usecase-s2/') ? 'active' : ''
                        }`}
                      >
                        <Link
                          className="nk-menu-link"
                          href="/usecase-s2/usecase-details-s2"
                        >
                          Use Case Details S2{' '}
                          <div className="badge bg-primary ms-2 me-n4 px-2 rounded-pill">
                            New
                          </div>
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/pricing' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/pricing">
                          Pricing
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/pricing-s2' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/pricing-s2">
                          Pricing S2
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/blog' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/blog">
                          Blog
                        </Link>
                      </li>
                    </ul>
                    <ul className="nk-menu-sub">
                      <li
                        className={`nk-menu-item ${
                          pathname.startsWith('/blog/') ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/blog/blog-single">
                          Blog Single
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/features' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/features">
                          Features
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/contact' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/contact">
                          Contact
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/contact-s2' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/contact-s2">
                          Contact S2
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/login' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/login">
                          Login
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/login-s2' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/login-s2">
                          Login S2
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/register' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/register">
                          Register
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/register-s2' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/register-s2">
                          Register S2
                        </Link>
                      </li>
                    </ul>
                    <ul className="nk-menu-sub">
                      <li
                        className={`nk-menu-item ${
                          pathname === '/reset' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/reset">
                          Reset
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/reset-s2' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/reset-s2">
                          Reset S2
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname.startsWith('/404') ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/error404">
                          404 Error
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname.startsWith('/404-s2') ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/error404-s2">
                          404 Error S2
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname.startsWith('/504') ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/error504">
                          504 Error
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname.startsWith('/error504-s2') ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/error504-s2">
                          504 Error s2
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/terms-condition' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/terms-condition">
                          Terms & Condition
                        </Link>
                      </li>
                      <li
                        className={`nk-menu-item ${
                          pathname === '/softnio-icons' ? 'active' : ''
                        }`}
                      >
                        <Link className="nk-menu-link" href="/softnio-icons">
                          Nioicon
                        </Link>
                      </li>
                    </ul>
                  </div>
                </DropDown>
              </li>
              <li
                className={`nk-menu-item ${
                  pathname === '/pricing' ? 'active' : ''
                }`}
              >
                <Link href="/pricing" className="nk-menu-link">
                  <span className="nk-menu-text">Pricing</span>
                </Link>
              </li>
            </ul>
            <div className="mx-2 d-none d-lg-block">
              {darkMode ? (
                <ModeSwitchDark initialDarkMode={darkMode} />
              ) : (
                <ModeSwitch initialDarkMode={darkMode} />
              )}
            </div>
            <ul className="nk-menu-buttons flex-lg-row-reverse">
              <li>
                <Button
                  href={actionBtnUrl ? actionBtnUrl : '/'}
                  btnText={actionBtnText}
                  btnClass={actionBtnClass}
                />
              </li>
              {loginBtn && (
                <li>
                  <Link className="link link-dark" href="/login">
                    {loginBtn}
                  </Link>
                </li>
              )}
              {language && (
                <li className="dropdown">
                  <span
                    className={`link link-base fw-medium dropdown-toggle ${
                      isLanguage ? 'show' : ''
                    }`}
                    onClick={() => setIsLanguage(!isLanguage)}
                  >
                    En (US)
                  </span>
                  <ul
                    className={`dropdown-menu dropdown-menu-end shadow-sm border-0 ${
                      isLanguage ? 'show' : ''
                    }`}
                  >
                    <li>
                      <Link
                        className="dropdown-item link-base py-2 px-4"
                        href="/"
                      >
                        Albanian (SQ)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item link-base py-2 px-4"
                        href="/"
                      >
                        Chinese (ZS)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item link-base py-2 px-4"
                        href="/"
                      >
                        French (FR)
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

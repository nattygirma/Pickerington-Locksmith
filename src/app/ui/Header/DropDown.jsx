'use client';
import { useState } from 'react';
import Image from 'next/image'
import avator from "../../../../public/images/b.jpg"

export default function DropDown({ children, menuTitle, megaMenuClass, isProfile }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const handelMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };
  return (
    <>
      <span
        className="nk-menu-link nk-menu-toggle"
        onClick={handelMobileToggle}
        style={{ cursor: 'pointer' }}
      >
        {isProfile?<>
          <Image className="rounded-circle" src={avator} width="31" alt="profile_picture"/>
        </>:<>
        <span className="nk-menu-text">{menuTitle}</span>
        </>}
      </span>
      <div
        className={
          megaMenuClass
            ? `nk-menu-dropdown ${megaMenuClass}`
            : 'nk-menu-dropdown'
        }
        style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
      >
        {children}
      </div>
    </>
  );
}

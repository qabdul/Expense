/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpensr
          <i class="fi-rr-credit-card" />.
        </div>
        <div className="header-button">
          <a href="#" target="_blank" rel="noreferrer">
            <i class="devicon-github-original colored" />
            Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

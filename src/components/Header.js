import React from "react";
import { isMobile } from "react-device-detect";

export default function Header() {
  return (
    <div className="Header">
      <h1>INES HILZ</h1>
      <div
        className="Header_texts"
        style={{
          position: isMobile ? "relative" : "fixed",
          flexDirection: isMobile ? "column" : "row",
          width: isMobile ? "100%" : "80%",
        }}
      >
        <p>Multimedia Art / XR-Design</p>
        {isMobile === true && (
          <div>
            <a href="https://www.instagram.com/inidewin_/" target="_blank">
              <img src="/assets/instagarm.png" width="5%" />
            </a>
            <a href="https://www.linkedin.com/in/ines-hilz/" target="_blank">
              <img src="/assets/linkedIn.png" width="5%" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCD7E1Iy8RkSsYPheoQ-qa6w"
              target="_blank"
            >
              <img src="/assets/youtube.png" width="7%" />
            </a>
            <a href="https://twitter.com/InesHilz" target="_blank">
              <img src="/assets/twitter.png" width="5%" />
            </a>
          </div>
        )}
        {isMobile === false && (
          <div>
            <a href="https://www.instagram.com/inidewin_/" target="_blank">
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCD7E1Iy8RkSsYPheoQ-qa6w"
              target="_blank"
            >
              Youtube
            </a>
            <a href="https://www.linkedin.com/in/ines-hilz/" target="_blank">
              LinkedIn
            </a>
            <a href="https://twitter.com/InesHilz" target="_blank">
              Twitter
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

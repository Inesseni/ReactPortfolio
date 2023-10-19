import React from "react";
import { isMobile } from "react-device-detect";

export default function Header() {
  return (
    <div className="Header">
      <h1 style={{ position: isMobile ? "relative" : "absolute", zIndex: 1 }}>
        INES HILZ
      </h1>
      <div
        className="Header_texts"
        style={{
          position: isMobile ? "relative" : "absolute",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: isMobile ? "flex-start" : "space-between",
          paddingTop: isMobile ? 0 : "15px",
        }}
      >
        <p>Multimedia Art / XR-Design</p>
        {isMobile === true && (
          <div>
            <a href="https://www.instagram.com/inidewin_/" target="_blank">
              <img src="/assets/instagarm.png" className="socialIcon" />
            </a>
            <a href="https://www.linkedin.com/in/ines-hilz/" target="_blank">
              <img src="/assets/linkedIn.png" className="socialIcon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCD7E1Iy8RkSsYPheoQ-qa6w"
              target="_blank"
            >
              <img src="/assets/youtube.png" className="socialIcon" />
            </a>
            <a href="https://twitter.com/InesHilz" target="_blank">
              <img src="/assets/twitter.png" className="socialIcon" />
            </a>
          </div>
        )}
        {isMobile === false && (
          <div style={{ display: "flex", gap: "10px" }}>
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

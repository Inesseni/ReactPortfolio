import React from "react";

export default function Header() {
  return (
    <div style={{ position: "fixed", zIndex: 2 }}>
      <div
        style={{
          flex: 1,
          width: "80vw",
          height: "100px",
          marginBottom: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <h1
          style={{
            width: "200px",
            position: "fixed",
            top: 5,
            left: "calc(50% - 100px)",
          }}
        >
          INES HILZ
        </h1>
        <p>Multimedia Art / XR-Design</p>
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
      </div>
    </div>
  );
}

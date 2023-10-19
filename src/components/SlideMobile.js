import React, { useRef } from "react";
import ReactBoxFlip from "react-box-flip";
import "../App.css";

export default function SlideMobile({
  effect_name,
  video_url,
  effect_descr,
  snapcode,
  onclick,
  flippedState,
  link,
}) {
  const vidRef = useRef(null);

  return (
    <div onClick={onclick}>
      <ReactBoxFlip isFlipped={flippedState}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <video autoPlay muted loop className="cardMobile">
            <source src={video_url} type="video/mp4" />
          </video>
        </div>
        <div className="cardMobile_back">
          <div className="cardMobile_content">
            <div
              style={{
                margin: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src={snapcode} />
              <h2
                style={{
                  margin: "0px",
                  padding: "0px",
                  flex: 1.5,
                  fontSize: "3vh",
                }}
              >
                {effect_name}
              </h2>
              <div style={{ flex: 5, fontSize: "1.8vh" }}>{effect_descr}</div>
              <a
                href={link}
                target="_blank"
                style={{
                  flex: 1,
                  textDecoration: "underline",
                  fontSize: "1.8vh",
                }}
              >
                open in snapchat
              </a>
            </div>
          </div>
        </div>
      </ReactBoxFlip>
    </div>
  );
}

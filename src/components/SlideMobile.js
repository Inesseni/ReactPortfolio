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
}) {
  const vidRef = useRef(null);

  return (
    <div className="sliderMobile" onClick={onclick}>
      <ReactBoxFlip isFlipped={flippedState}>
        <div className="card_front">
          <video width="100%" height="100%" autoPlay muted loop>
            <source src={video_url} type="video/mp4" />
          </video>
        </div>
        <div
          className="card_back"
          style={{ maxWidth: "208px", maxHeight: "397px" }}
        >
          <img src={snapcode} style={{ paddingTop: "0px" }} />
          <h2 style={{ marginBottom: "8px" }}>{effect_name}</h2>
          <div>{effect_descr}</div>
        </div>
      </ReactBoxFlip>
    </div>
  );
}

import React, { useRef } from "react";
import ReactBoxFlip from "react-box-flip";
import "../App.css";

export default function Slide({
  effect_name,
  video_url,
  effect_descr,
  snapcode,
  onclick,
  flippedState,
}) {
  const vidRef = useRef(null);

  return (
    <div className="cardWeb" onClick={onclick}>
      <ReactBoxFlip isFlipped={flippedState}>
        <div className="card_front">
          <video width="100%" autoPlay muted loop>
            <source src={video_url} type="video/mp4" />
          </video>
        </div>
        <div className="card_back">
          <img src={snapcode} />
          <h2 style={{ marginBottom: "8px" }}>{effect_name}</h2>
          <div>{effect_descr}</div>
        </div>
      </ReactBoxFlip>
    </div>
  );
}

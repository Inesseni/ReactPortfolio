import React, { useState, useRef } from "react";
import ReactBoxFlip from "react-box-flip";
import "../App.css";

export default function Slide({
  effect_name,
  video_url,
  effect_descr,
  link,
  snapcode,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const vidRef = useRef(null);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="slide" onClick={handleClick}>
      <ReactBoxFlip isFlipped={isFlipped}>
        <div className="card_front">
          <video width="100%" height="auto" autoPlay muted loop>
            <source src={video_url} type="video/mp4" ref={vidRef} />
          </video>
        </div>
        <div className="card_back">
          <img src={snapcode} style={{ width: "100%", paddingTop: "16px" }} />
          <h2 style={{ marginBottom: "8px" }}>{effect_name}</h2>
          <div>{effect_descr}</div>
        </div>
      </ReactBoxFlip>
    </div>
  );
}

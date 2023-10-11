import React, { useState } from "react";
import Slide from "./Slide";
import "../App.css";
import socialARDatabase from "../SocialARDatabase";

export default function SliderShow({ video_url }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function toggleSlideflip(e) {
    //console.log("card clicked: " + e.id);
    if (e.flipped) {
      e.flipped = false;
    } else {
      e.flipped = true;
    }
    setIsFlipped(!isFlipped);
  }

  const arrayOfSlides = socialARDatabase.map((effect) => (
    <Slide
      video_url={effect.videoLink}
      effect_name={effect.effect_name}
      effect_descr={effect.description}
      link={effect.link}
      snapcode={effect.snapcode}
      onclick={() => toggleSlideflip(effect)}
      flippedState={effect.flipped}
    />
  ));

  return (
    <div>
      <div style={{ marginTop: "180px" }}></div>
      <div className="slider">
        <div className="slide-track">
          {arrayOfSlides}
          {arrayOfSlides}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <p style={{ margin: 0 }}>Social AR effects</p>
        <a
          href="https://lensstudio.snapchat.com/creator/F1cYXucDAIl9uze0JG0RmA"
          target="_blank"
        >
          show all
        </a>
      </div>
    </div>
  );
}

//box flip: https://www.npmjs.com/package/react-box-flip

/*
        <a
          href="https://lensstudio.snapchat.com/creator/F1cYXucDAIl9uze0JG0RmA"
          target="_blank"
        >
          <button className="button-18" role="button">
            show all
          </button>
        </a>
*/

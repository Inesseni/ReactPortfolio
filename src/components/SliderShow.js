import React, { useState } from "react";
import Slide from "./Slide";
import "../App.css";
import socialARDatabase from "../SocialARDatabase";

export default function SliderShow({ video_url }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function toggleSlideflip(e) {
    console.log("card clicked: " + e.id);
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
      <p>social AR effects</p>
      <div className="slider">
        <div className="slide-track">
          {arrayOfSlides}
          {arrayOfSlides}
        </div>
      </div>
      <a
        href="https://lensstudio.snapchat.com/creator/F1cYXucDAIl9uze0JG0RmA"
        target="_blank"
      >
        <button className="button-17" role="button">
          Show All
        </button>
      </a>
    </div>
  );
}

//box flip: https://www.npmjs.com/package/react-box-flip

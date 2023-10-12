import React, { useState, useContext } from "react";
import Slide from "./Slide";
import "../App.css";
import socialARDatabase from "../SocialARDatabase";
import { isMobile } from "react-device-detect";
import Header from "./Header";
import FramerSwipe from "./FramerSwipe";

export default function SliderShow({ video_url }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function toggleSlideflip(e) {
    if (isMobile) return;
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
    <div className="section">
      <Header />
      {isMobile === false && (
        <div>
          <div className="slider">
            <div className="slide-track">
              {arrayOfSlides}
              {arrayOfSlides}
            </div>
          </div>
        </div>
      )}
      {isMobile === true && (
        <div
          className="slider"
          style={{
            width: "100%",
            display: "flex",
            marginBottom: "20px",
          }}
        >
          <FramerSwipe />
        </div>
      )}
      <div className="slider_texts">
        <p>Social AR effects</p>
        <a
          href="https://lensstudio.snapchat.com/creator/F1cYXucDAIl9uze0JG0RmA"
          target="_blank"
          style={{ textDecoration: "underline" }}
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

import { isMobile } from "react-device-detect";
        {isMobile === true && (
        <div
          style={{ backgroundColor: "red", width: "100px", height: "100px" }}
        ></div>
      )}
*/

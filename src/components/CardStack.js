import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import SlideMobile from "./SlideMobile";
import socialARDatabase from "../SocialARDatabase";
import "../App.css";

const CARD_OFFSET = 3;
const SCALE_FACTOR = 0.9;

export default function CardStack() {
  const [scriptDatabase, setScriptDatabase] = useState(socialARDatabase);
  const moveToEnd = (from) => {
    console.log(from); //gives out 0
    console.log(scriptDatabase.length - from); //gives out 9

    const updatedDatabase = move(
      scriptDatabase,
      from,
      scriptDatabase.length - 1
    );
    setScriptDatabase(updatedDatabase);
  };

  function toggleSlideflip(clickedCard) {
    const updatedDatabase = scriptDatabase.map((card) => {
      if (card.id === clickedCard.id) {
        // Toggle the flipped property of the clicked card
        return { ...card, flipped: !card.flipped };
      }
      return card;
    });

    // Update the socialARDatabase state with the updated database
    setScriptDatabase(updatedDatabase);
  }

  return (
    <ul className="cardWrapStyle">
      {scriptDatabase.map((color, index) => {
        const canDrag = index === 0;
        return (
          <motion.li
            key={index}
            className="cardStyle"
            style={{
              cursor: canDrag ? "grab" : "auto",
            }}
            onDragEnd={function () {
              //just check if we drag the front card
              if (index === 0) {
                moveToEnd(index);
              }
            }}
            animate={{
              right: index * -CARD_OFFSET,
              top: index * CARD_OFFSET,
              scale: SCALE_FACTOR,
              zIndex: scriptDatabase.length - index,
            }}
            drag={canDrag ? "x" : true}
            dragConstraints={{
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            {scriptDatabase[index] && (
              <SlideMobile
                video_url={scriptDatabase[index].videoLink}
                flippedState={scriptDatabase[index].flipped}
                effect_name={scriptDatabase[index].effect_name}
                effect_descr={scriptDatabase[index].description}
                onclick={() => toggleSlideflip(scriptDatabase[index])}
                snapcode={scriptDatabase[index].snapcode}
                link={scriptDatabase[index].url}
              />
            )}
          </motion.li>
        );
      })}
    </ul>
  );
}

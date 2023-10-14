import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import SlideMobile from "./SlideMobile";
import socialARDatabase from "../SocialARDatabase";

const CARD_COLORS = ["#266677", "#cb7c7b", "#36a15c", "#cda355", "#747475"];
const CARD_OFFSET = 3;
const SCALE_FACTOR = 0.9;

export default function CardStack() {
  const [scriptDatabase, setScriptDatabase] = useState(socialARDatabase);

  const [cards, setCards] = useState([...Array(scriptDatabase.length).keys()]);
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
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
    for (var i = 0; i <= scriptDatabase.length - 1; i++) {
      console.log(scriptDatabase[i].flipped);
    }
  }

  return (
    <ul style={cardWrapStyle}>
      {cards.map((color, index) => {
        const canDrag = index === 0;
        return (
          <motion.li
            key={color}
            style={{
              ...cardStyle,
              cursor: canDrag ? "grab" : "auto",
            }}
            animate={{
              right: index * -CARD_OFFSET,
              top: index * CARD_OFFSET,
              scale: SCALE_FACTOR,
              zIndex: CARD_COLORS.length - index,
            }}
            drag={canDrag ? "x" : true}
            dragConstraints={{
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
            onDragEnd={function () {
              //just check if we drag the front card
              if (index === 0) {
                moveToEnd(index);
              }
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
              />
            )}
          </motion.li>
        );
      })}
    </ul>
  );
}

const cardWrapStyle = {
  position: "relative",
  left: "calc(50% - 38%)",
};

const cardStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: "green",
  transformOrigin: "top center",
  listStyle: "none",
};

import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import Slide from "./Slide";

const CARD_COLORS = ["#266677", "#cb7c7b", "#36a15c", "#cda355", "#747475"];
const CARD_OFFSET = 20;
const SCALE_FACTOR = 0.05;

export default function CardStack() {
  const [cards, setCards] = React.useState(CARD_COLORS);
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <ul style={cardWrapStyle}>
      {cards.map((color, index) => {
        const canDrag = index === 0;

        return (
          <motion.li
            key={color}
            style={{
              ...cardStyle,
              backgroundColor: color,
              cursor: canDrag ? "grab" : "auto",
            }}
            animate={{
              right: index * -CARD_OFFSET,
              top: index * CARD_OFFSET * 0.5,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: CARD_COLORS.length - index,
            }}
            drag={canDrag ? "x" : true}
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            onDragEnd={() => moveToEnd(index)}
          >
            <Slide
              video_url={
                "https://community-lens.storage.googleapis.com/preview-media/final/a8356d4c-25be-4c40-bbb4-651700f89430.mp4"
              }
            />
          </motion.li>
        );
      })}
    </ul>
  );
}

const cardWrapStyle = {
  position: "absolute",
  width: "100%",
  left: "-30%",
  margin: "0px",
  padding: "0px",
};

const cardStyle = {
  position: "absolute",
  width: "220px",
  height: "350px",
  borderRadius: "8px",
  transformOrigin: "top center",
  listStyle: "none",
};

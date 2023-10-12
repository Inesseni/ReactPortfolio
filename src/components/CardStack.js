import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import Slide from "./Slide";
import socialARDatabase from "../SocialARDatabase";

const CARD_COLORS = ["#266677", "#cb7c7b", "#36a15c", "#cda355", "#747475"];
const CARD_OFFSET = 3;
const SCALE_FACTOR = 0.9;
const CARD_DATA = socialARDatabase;

export default function CardStack() {
  const [cards, setCards] = React.useState([
    ...Array(socialARDatabase.length).keys(),
  ]);
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <ul style={cardWrapStyle}>
      {cards.map((color, index) => {
        const canDrag = index === 0;
        const dataIndex = index % socialARDatabase.length; // Wrap the index if there are more than 4 items
        const videoUrl =
          index < CARD_DATA.length ? CARD_DATA[index].videoLink : "";

        return (
          <motion.li
            key={color}
            style={{
              ...cardStyle,
              //backgroundColor: color,
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
              if (index == 0) {
                moveToEnd(index);
              }
            }}
          >
            {socialARDatabase[dataIndex] && (
              <Slide video_url={socialARDatabase[dataIndex].videoLink} />
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

import React, { useState, useContext } from "react";
import "../App.css";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const colors = ["#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#3A86FF"];
const randomColor = (current) => {
  while (true) {
    const index = Math.floor(Math.random() * colors.length);
    if (current != colors[index]) {
      return colors[index];
    }
  }
};
const Card = ({
  card,
  style,
  onDirectionLock,
  onDragStart,
  onDragEnd,
  animate,
  video_url,
}) => (
  <motion.div
    className="framerCard"
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    dragDirectionLock
    onDirectionLock={onDirectionLock}
    onDragEnd={onDragEnd}
    animate={animate}
    style={{ ...style, background: card.background }}
    transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
    whileTap={{ scale: 0.85 }}
  >
    <div className="card_front">
      <video width="100%" autoPlay muted loop>
        <source
          src={
            "https://community-lens.storage.googleapis.com/preview-media/final/c23c9650-4c3a-4a0c-97db-6c178d935d26.mp4"
          }
          type="video/mp4"
        />
      </video>
    </div>
  </motion.div>
);

export default function FramerSwipe({ video_url }) {
  const [cards, setCards] = useState([
    { text: "Up or down", background: "transparent", video_url: { video_url } },
    {
      text: "Left or right",
      background: "transparent",
      video_url: { video_url },
    },
    { text: "Swipe me!", background: "transparent", video_url: { video_url } },
  ]);
  const [dragStart, setDragStart] = useState({
    axis: null,
    animation: { x: 0, y: 0 },
  });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(
    dragStart.axis === "x" ? x : y,
    [-175, 0, 175],
    [1, 0.5, 1]
  );
  const shadowBlur = useTransform(
    dragStart.axis === "x" ? x : y,
    [-175, 0, 175],
    [0, 25, 0]
  );
  const shadowOpacity = useTransform(
    dragStart.axis === "x" ? x : y,
    [-175, 0, 175],
    [0, 0.2, 0]
  );
  const boxShadow = useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`;
  const onDirectionLock = (axis) => setDragStart({ ...dragStart, axis: axis });
  const animateCardSwipe = (animation) => {
    setDragStart({ ...dragStart, animation });

    setTimeout(() => {
      setDragStart({ axis: null, animation: { x: 0, y: 0 } });
      x.set(0);
      y.set(0);
      setCards([
        {
          text: "just an another card",
          background: "transparent",
        },
        ...cards.slice(0, cards.length - 1),
      ]);
    }, 200);
  };
  const onDragEnd = (info) => {
    if (dragStart.axis === "x") {
      if (info.offset.x >= 100) animateCardSwipe({ x: 175, y: 0 });
      else if (info.offset.x <= -100) animateCardSwipe({ x: -175, y: 0 });
    } else {
      if (info.offset.y >= 100) animateCardSwipe({ x: 0, y: 175 });
      else if (info.offset.y <= -100) animateCardSwipe({ x: 0, y: -175 });
    }
  };
  const renderCards = () => {
    return cards.map((card, index) => {
      if (index === cards.length - 1) {
        return (
          <Card
            card={card}
            key={index}
            style={{ x, y, zIndex: index }}
            onDirectionLock={(axis) => onDirectionLock(axis)}
            onDragEnd={(e, info) => onDragEnd(info)}
            animate={dragStart.animation}
          />
        );
      } else
        return (
          <Card
            card={card}
            key={index}
            style={{
              scale,
              boxShadow,
              zIndex: index,
            }}
          />
        );
    });
  };
  return <div className="infinite-cards">{renderCards()}</div>;
}

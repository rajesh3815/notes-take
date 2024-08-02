import React, { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
const Color = ({ btncolor, setColor }) => {
  const myMedia=useMediaPredicate("((max-width: 480px)")
  const [isHovered, setIsHovered] = useState(false);
  // console.log(myMedia);
  const myspan = {
  height: `${myMedia?"1.5rem":"2rem"}`,
    width: `${myMedia?"1.5rem":"2rem"}`,
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: `${btncolor}`,
  };
  const handeler1 = () => {
    setIsHovered(true);
  };
  const handeler2 = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    // console.log(btncolor);
    setColor(btncolor);
  };
  const hov = isHovered ? { border: `2px solid ${btncolor}` } : {};

  return (
    <span
      style={{ ...myspan, ...hov }}
      onMouseEnter={handeler1}
      onMouseLeave={handeler2}
      onClick={handleClick}
    ></span>
  );
};

export default Color;

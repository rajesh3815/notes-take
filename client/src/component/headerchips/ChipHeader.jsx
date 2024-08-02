import React, { useEffect, useContext, useState, useRef } from "react";
import { Notescontext } from "../../context/Mycontext";
import "./ChipHeader.css";
import { useMediaPredicate } from "react-media-hook";
const ChipHeader = ({ heading, color }) => {
  const myMedia = useMediaPredicate("((max-width: 480px)");
  let header = logo(heading);
  // context datas
  const { setGroupHeader, setTogle, setColor, setscreenTogle } =
    useContext(Notescontext);
  const [isActive, setisActive] = useState(false);
  //use ref
  const chipRef = useRef(null);
  //function for logo
  function logo(header) {
    let ans = header.charAt(0);
    for (let i = 0; i < header.length; i++) {
      if (header.charAt(i) == " ") {
        if (header.charAt(i + 1) == " ") continue;
        ans += header.charAt(i + 1);
        break;
      }
    }
    return ans;
  }
  const clickHandeler = () => {
    //code for mobile screen
    myMedia && setscreenTogle(true);
    //-------------------------//-------------
    setTogle(true);
    setGroupHeader(heading);
    setColor(color);
  };
  useEffect(() => {
    // console.log(chipRef.current);
    document.addEventListener("click", (e) => {
      if (chipRef?.current?.contains(e.target)) {
        setisActive(true);
      } else {
        setisActive(false);
      }
    });
  }, []);
  return (
    <div
      className="headers"
      onClick={clickHandeler}
      style={{
        backgroundColor: `${isActive ? "#2F2F2F2B" : ""}`,
      }}
      ref={chipRef}
    >
      <div
        style={{
          height: "4rem",
          width: "4rem",
          borderRadius: "50%",
          backgroundColor: `${color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: "600",
          fontSize: "25px",
          color: "white",
        }}
      >
        {header}
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        {heading}
      </div>
    </div>
  );
};

export default ChipHeader;

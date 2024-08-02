import React from "react";
import { useMediaPredicate } from "react-media-hook";
import Style from "./noteschip.module.css";

const NotesChip = ({ chipData }) => {
  const myMedia = useMediaPredicate("((max-width: 480px)");

  const dateFormater = () => {
    const date = new Date(chipData.time);
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = date
      .toLocaleDateString("en-US", options)
      .replace(",", "");
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const formattedDateTime = `${formattedDate} . ${formattedTime}`;
    return formattedDateTime;
  };

  const formattedTime = dateFormater();

  return (
    <div
      style={{
        height: "8rem",
        width: myMedia ? "90vw" : "65rem",
        marginTop: "1rem",
        borderRadius: "5px",
        backgroundColor: "white",
        boxShadow: "0px 4px 20px 0px #00000040",
        padding: "10px",
        overflow: "auto",
        fontSize: "18px",
        fontFamily: "sans-serif",
        letterSpacing: "1.5px",
        position: "relative",
      }}
    >
      <p>{chipData.text}</p>
      <p className={Style.dateField}>{formattedTime}</p>
     
    </div>
  );
};

export default NotesChip;

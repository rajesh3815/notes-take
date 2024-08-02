import React,{useContext} from "react";
import './NoteHeader.css';
import { Notescontext } from "../../../context/Mycontext";
import rwdArrow from "../../../assets/rwdArrow.svg";
const NoteHeader = ({ heading, color }) => {
  const { screenTogle,setscreenTogle } = useContext(Notescontext);
  let header = logo(heading);
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
  return (
    <div className="N-headers">
     {screenTogle&&<div onClick={()=>setscreenTogle(false)} style={{cursor:"pointer",width:"13px"}}><img src={rwdArrow} alt=""  /></div>}
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

export default NoteHeader;

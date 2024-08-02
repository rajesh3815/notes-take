import React, { useContext, useEffect, useRef, useState } from "react";
import Styles from "./Popup.module.css";
import Color from "../Color";
import { addGroup } from "../../apis/note";
import { Notescontext } from "../../context/Mycontext";
import toast, { Toaster } from "react-hot-toast";
const Popup = ({ isActive, setisActive, groupData }) => {
  const popref = useRef();
  const { togleFetch, setTogleFetch } = useContext(Notescontext);
  const colorArray = [
    "#43E6FC",
    "#B38BFA",
    "#FF79F2",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];
  const [borderColor, setborderColor] = useState();
  const [inputHeader, setInputHeader] = useState("");
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!popref.current.contains(e.target)) {
        setisActive(false);
       
      }
    });
  }, []);

  const clickHandeler = async () => {
 
    if(!inputHeader){
      toast.error("input field is required");
      return;
    }
    if(!borderColor){
      toast.error("color is required");
      return;
    }
   
    const data = await addGroup(inputHeader, borderColor);
    setInputHeader("");
    setborderColor("")
    setTogleFetch(!togleFetch);
    toast.success("Group added successfully")
  };

  return (
    <>
      <div
        className={Styles.Popup}
        style={{ display: `${isActive ? "block" : "none"}` }}
      >
        {/* popup code */}
        <div
          className={Styles.pops}
          ref={popref}
          style={{ border: `3px solid ${borderColor?borderColor:"white"}` }}
        >
          <h3 className={Styles.headers}>Create New group</h3>
          <div className={Styles.groupName}>
            <h3>Group Name</h3>
            <input
              type="text"
              placeholder="Enter group name"
              name="input"
              value={inputHeader}
              onChange={(e) => setInputHeader(e.target.value)}
            />
          </div>
          <div className={Styles.colors}>
            <h3>Choose colour</h3>
            <div className={Styles.spans}>
              {colorArray.map((el, index) => (
                <Color key={index} btncolor={el} setColor={setborderColor} />
              ))}
            </div>
          </div>

          <button className={Styles.btn} onClick={clickHandeler}>
            Create
          </button>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Popup;

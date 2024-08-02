import React, { useEffect, useState, useContext, useRef } from "react";
import { Notescontext } from "../../../context/Mycontext";
import "./NotesMain.css";
import NotesChip from "../noteschip/NotesChip";
import arrowdisabled from "../../../assets/arrowoff.svg";
import arrowenabled from "../../../assets/arrowon.svg";
import NoteHeader from "../noteheader/NoteHeader";
import { addMessageNote, getGroupByMessage } from "../../../apis/note";
import toast, { Toaster } from "react-hot-toast";

const NotesMain = () => {
  const textref = useRef(null);

  const { groupHeader, color } = useContext(Notescontext);

  const [notesdata, setNotesdata] = useState([]);
  const [textinput, setTextinput] = useState("");
  const [isActive, setisActive] = useState(false);
  const [fetchTogle, setFetchTogle] = useState(false);
  //clickhandeler
  const clickHandeler = async () => {
    if (textinput == "") {
      toast.error("input field is empty");
      return;
    }
    await addMessageNote(groupHeader, textinput);
    setFetchTogle(!fetchTogle);
    setTextinput("");
    toast.success("note added Successfully");
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (textref.current.contains(e.target)) {
        // console.log(e.target);
        setisActive(true);
      } else {
        setisActive(false);
      }
    });
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [groupHeader, fetchTogle]);
  const fetchNotes = async () => {
    if (!groupHeader) return;
    const data = await getGroupByMessage(groupHeader);
    setNotesdata([]);
    setNotesdata(data.notemessages);
  };

  return (
    <div className="notes-main">
      <div className="head-bar">
        <NoteHeader heading={groupHeader} color={color} />
      </div>
      <div>
        <div className="inputdata">
          {notesdata.map((element, index) => (
            <div key={index}>
              <NotesChip chipData={element} />
            </div>
          ))}
        </div>
        <div className="inputs">
          <textarea
            placeholder="Enter your text here"
            className="txt"
            name=""
            id=""
            cols="140"
            rows="8"
            value={textinput}
            onChange={(e) => setTextinput(e.target.value)}
            ref={textref}
          ></textarea>
          <button className="notes-btns" onClick={clickHandeler}>
            {<img src={isActive ? arrowenabled : arrowdisabled} />}
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default NotesMain;

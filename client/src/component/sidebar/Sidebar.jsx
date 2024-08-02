import React, { useEffect, useRef, useState, useContext } from "react";
import Style from "./Sidebar.module.css";
import Popup from "../popup/Popup";
import ChipHeader from "../headerchips/ChipHeader";
import { useMediaPredicate } from "react-media-hook";
import { Notescontext } from "../../context/Mycontext";
import { getAllGroups } from "../../apis/note";
const Sidebar = () => {
  //context data
  const { screenTogle, togleFetch } = useContext(Notescontext);
  const myMedia = useMediaPredicate("((max-width: 480px)"); //media query
  const [isActive, setisActive] = useState(false);
  const [groupData, setGroupData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const handeler = () => {
    setisActive(true);
  };
  // localStorage.clear()
  useEffect(() => {
    fetchGroups();
  }, [togleFetch]);

  const fetchGroups = async () => {
    const data = await getAllGroups();
    setGroupData(data.noteHeadings);
  };

  return (
    <>
      <div
        className={Style.sidebar}
        style={{ display: screenTogle ? "none" : "block" }}
      >
        <div className={Style.innersidebar}>
          <div className={Style.groups}>
            <h2 className={Style.sideHeader}>Pocket Notes</h2>
            <div>
              <input
                className={Style.searchBar}
                type="text"
                name="search"
                placeholder="search notes"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          </div>
          <div className={Style.headerChip}>
            {groupData
              .filter((item) =>
                item.heading.toLowerCase().includes(searchInput.toLowerCase())
              )
              .map((el, index) => (
                <ChipHeader
                  key={index}
                  heading={el?.heading}
                  color={el?.color}
                />
              ))}
          </div>
        </div>
        <div className={Style.btndiv}>
          <button className={Style.sideBtn} onClick={handeler}>
            +
          </button>
        </div>
      </div>
      <Popup
        isActive={isActive}
        setisActive={setisActive}
        setGroupData={setGroupData}
        groupData={groupData}
      />
    </>
  );
};

export default Sidebar;

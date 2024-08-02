import { useState,useEffect,useContext } from "react";
import "./App.css";
import Sidebar from "./component/sidebar/Sidebar";
import Notes from "./component/notes/notespage/Notes";
import ContextProvider from "./context/Mycontext";
import { Notescontext } from "./context/Mycontext";
function App() {
  const {  screenTogle } = useContext(Notescontext);
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <ContextProvider>
          <Sidebar  />
          <Notes />
        </ContextProvider>
      </div>
    </>
  );
}

export default App;

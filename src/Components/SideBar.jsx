import React, { useState } from "react";
import plusIcon from "../assets/plus.svg";
import "./Sidebar.css";
import resetIcon from "../assets/reset.svg";

const Sidebar = ({ addNote, resetNotes }) => {
  const colors = [
    "#ff8374", "#ffac5e", "#6ed3cf", "#8fa7e6", "#f4d35e",
    "#60a083", "#f17e7e", "#80ced6", "#9b6ed3", "#f7ede2"
  ];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" className="plusIcon" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((color, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: color }}
            onClick={() => addNote(color)}
          />
        ))}
      </ul>
      <img src={resetIcon} alt="Reset" className="resetIcon" onClick={()=>resetNotes()} />
    </div>
  );
};

export default Sidebar;

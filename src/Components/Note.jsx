import React from "react";
import deleteIcon from "../assets/delete.svg";
import "./Note.css";

const Note = ({ note, updateText, deleteNote }) => {
  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const [hrs, min, day, month] = [
      date.getHours().toString().padStart(2, "0"),
      date.getMinutes().toString().padStart(2, "0"),
      date.getDate(),
      ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][date.getMonth()]
    ];
    return `${hrs}:${min} ${day} ${month}`;
  };

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <textarea
        className="note_text"
        defaultValue={note.text}
        onChange={(e) => updateText(e.target.value, note.id)}
      />
      <div className="note_footer">
        <p>{formatDate(note.time)}</p>
        <img src={deleteIcon} alt="DELETE" onClick={() => deleteNote(note.id)} />
      </div>
    </div>
  );
};

export default Note;

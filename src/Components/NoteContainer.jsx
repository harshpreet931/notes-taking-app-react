import React from "react";
import Note from "./Note";
import "./NoteContainer.css";

const NoteContainer = ({ notes, deleteNote, updateText,greeting }) => {
  const reversedNotes = notes.slice().reverse();
  return (
    <div className="note-container">
      <h2>{greeting} - Add Notes Here.</h2>
      <div className="note-container_notes custom-scroll">
        {reversedNotes.length > 0 ? (
          reversedNotes.map((note) => (
            <Note
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              updateText={updateText}
            />
          ))
        ) : (
          <h3>Write Some Notes.</h3>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;

import React, { useEffect, useState } from "react";
import NoteContainer from "./Components/NoteContainer";
import Sidebar from "./Components/SideBar";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes-app")) || []);
  const [greeting, setGreeting] = useState("");

  const addNote = (color) => {
    setNotes(prevNotes => [...prevNotes, {
      id: Date.now() + "" + crypto.randomUUID(),
      text: "",
      time: Date.now(),
      color,
    }]);
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const updateText = (text, id) => {
    setNotes(prevNotes => prevNotes.map(note => {
      if (note.id === id) {
        return { ...note, text };
      }
      return note;
    }));
  };

  const resetNotes = () => {
    setNotes([]);
  }

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  useEffect(()=>{
    const date = new Date();
    const hours = date.getHours();
    if(hours < 12){
      setGreeting("Good Morning!");
    }else if(hours < 18){
      setGreeting("Good Afternoon!");
    }else{
      setGreeting("Good Evening!");
    }
  },[])

  return (
    <div className="App">
      <Sidebar addNote={addNote} resetNotes={resetNotes} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
        greeting={greeting}
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./Notes.css";
import NotesCard from "../../components/notesCard/NotesCard";
import PaletteIcon from "@material-ui/icons/Palette";

function Notes() {
  const [cardColor, setcardColor] = useState("");
  const [notesTitle, setNotesTitle] = useState("");
  const [notesTask, setNotesTask] = useState("");
  const [notes, setNotes] = useState([]);

  const addNoteHandler = () => {
    setNotes((prev) => [
      ...prev,
      { title: notesTitle, task: notesTask, color: cardColor },
    ]);

    setNotesTitle("");
    setNotesTask("");
    setcardColor("");
  };

  return (
    <>
      <div className="notesBorder">
        <h2>Create notes</h2>
        <div style={{ backgroundColor: cardColor }}>
          <form className="notesForm">
            <input
              placeholder="Type Title of notes here"
              type="text"
              value={notesTitle}
              onChange={(e) => setNotesTitle(e.target.value)}
            />

            <textarea
              placeholder="Write your task here"
              type="text"
              value={notesTask}
              onChange={(e) => setNotesTask(e.target.value)}
            />
          </form>
          <button className="createNotes" onClick={addNoteHandler}>
            Create Note
          </button>
          
        </div>

        <div className="timeClr">
          <div>2 August 2022 11:41 AM</div>

          <div>
          <PaletteIcon />
          <button className="btnRed" onClick={() => setcardColor("#FFCCCB")}/>
          <button className="btnBlue" onClick={() => setcardColor("#ADD8E6")}/>
          <button className="btnGreen" onClick={() => setcardColor("#90ee90")}/>
          <button className="btnYellow" onClick={() => setcardColor("#FFFF00")}/>
          </div>
          

          <div className="options">
            <label htmlFor="priority">Priority: </label>
            <select name="priority" id="priority">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>



          <div className="options">
            <label htmlFor="tag">Tag: </label>
            <select name="tag" id="tag">
              <option value="home">Home</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
            </select>
          </div>


           

        </div>

        
          
        
      </div>

      <section className="cardCollection">
        {notes.map((item, index) => (
          <NotesCard
            notesTitle={item.title}
            notesTask={item.task}
            key={index}
            cardColor={item.color}
          />
        ))}
      </section>
    </>
  );
}

export default Notes;



import React, { useState } from "react";
import "./styles.css";
import { Link } from 'react-router-dom'


import CreateArea from "./CreateArea";
import Note from "./Note";
import Count from "./Count";

function AddJob(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  return (
    <div className="App">
    <Link to='/adminStatus' className="btn btn-primary mt-5"> Check the Applicant's Status</Link>
      <Count 
        count={ 
          notes.length === 0
            ? "Add Your 1st Job"
            : `You have posted ${notes.length} jobs`
        }
      />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          skill={note.skill}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
    </div>
  );
}

export default AddJob;
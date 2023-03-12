import React from "react";
import { MdDelete } from "react-icons/md";

function Note({ title, content,skill, onDelete, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>Required Skills:{skill}</p>
      <p>Job Descriotion:{content}</p>
      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
    </div>
  );
}

export default Note;
import React from 'react';
import Note from './Note';
import './stylez.css';
import AddNote from './AddNote';

const NoteList = ({ notes, handleAddNote, handleDelete, handleEdit }) => {
  return (
    <div className='container'>
      <div className='notelist'>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </div>
  );
};

export default NoteList;

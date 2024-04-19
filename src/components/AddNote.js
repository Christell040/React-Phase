import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    handleAddNote(noteText);
    setNoteText("");
  };

  return (
    <div className='note-new'>
      <textarea
        rows={8}
        cols={10}
        placeholder='Type your text to add'
        onChange={handleChange}
        value={noteText}
      ></textarea>

      <div className='note-footer'>
        <button onClick={handleSaveClick}>
          <div className='svg-wrapper-1'>
            <div className='svg-wrapper'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='24'
                height='24'
              >
                <path fill='none' d='M0 0h24v24H0z'></path>
                <path
                  fill='currentColor'
                  d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default AddNote;

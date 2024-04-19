import React, { useState } from 'react';
import './stylez.css';

const Note = ({ note, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    handleEdit(note.id, editedContent);
    setIsEditing(false);
  };

  return (
    <div className='card bg-white w-48 h-64 rounded-lg'>
      <div className='flex-container flex p-2 gap-1'>
        <div className='bundle'>
          <div className='dot'>
            <span className='blue-dot'></span>
          </div>
          <div className='circle'>
            <span className='purple-dot' onClick={handleEditClick}></span>
          </div>
        </div>
        <div className='circle'>
          <span className='pink-dot' onClick={() => handleDelete(note.id)}></span>
        </div>
      </div>

      <div className='card__content'>
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          <h5>{note.content}</h5>
        )}
      </div>

      {isEditing && (
        <button onClick={handleSaveEdit}>Save</button>
      )}
    </div>
  );
};

export default Note;

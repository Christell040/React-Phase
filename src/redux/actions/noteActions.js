import { nanoid } from 'nanoid';

export const addNote = (text) => ({
  type: 'ADD_NOTE',
  payload: {
    id: nanoid(),
    content: text,
  },
});

export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  payload: id,
});

export const editNote = (id, newContent) => ({
  type: 'EDIT_NOTE',
  payload: {
    id,
    newContent,
  },
});

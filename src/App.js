import './components/stylez.css';
import NoteList from './components/NoteList';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote, editNote } from './redux/actions/noteActions';

function App() {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddNote = (text) => {
    dispatch(addNote(text));
  };

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handleEdit = (id, newContent) => {
    dispatch(editNote(id, newContent));
  };

  return (
    <div>
      <Navbar />
      <NoteList
        notes={notes}
        handleAddNote={handleAddNote}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;

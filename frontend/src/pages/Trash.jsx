import { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import NoteCard from '../components/NoteCard';
import '../styles/dashboard.css';
import '../styles/notes.css';

const Trash = () => {
  const { notes } = useContext(NoteContext);
  const trashedNotes = (notes || []).filter((note) => note.trashed);

  return (
    <div className='dashboard-container'>
      <div className='dashboard-header'>
        <div className='dashboard-title'>🗑️ Trash</div>
      </div>
      <div className='dashboard-content'>
        {trashedNotes.length === 0 ? (
          <div className='empty-state'>
            <p>Your trash is empty</p>
          </div>
        ) : (
          <div className='notes-grid'>
            {trashedNotes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trash;
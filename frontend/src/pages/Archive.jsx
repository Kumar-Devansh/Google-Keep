import { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import NoteCard from '../components/NoteCard';
import '../styles/dashboard.css';
import '../styles/notes.css';

const Archive = () => {
  const { notes } = useContext(NoteContext);
  const archivedNotes = (notes || []).filter((note) => note.archived);

  return (
    <div>
      <h1>Archive</h1>
      {archivedNotes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};

export default Archive;

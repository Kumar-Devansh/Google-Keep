import { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';

const NoteCard = ({ note }) => {
  const { editNote, removeNote } = useContext(NoteContext);

  return (
    <div className='note-card' style={{ background: note.color }}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div>
        <button
          onClick={() =>
            editNote(note._id, {
              pinned: !note.pinned
            })
          }
        >
          {note.pinned ? 'Unpin' : 'Pin'}
        </button>
        <button
          onClick={() =>
            editNote(note._id, {
              archived: !note.archived
            })
          }
        >
          {note.archived ? 'Unarchive' : 'Archive'}
        </button>
        <button onClick={() => removeNote(note._id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
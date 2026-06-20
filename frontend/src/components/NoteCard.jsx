import { useContext, useRef, useState } from 'react';
import { NoteContext } from '../context/NoteContext';
import EditNoteModal from './EditNoteModal';

const NoteCard = ({ note }) => {
  const { editNote, removeNote } = useContext(NoteContext);
  const cardRef = useRef(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditSave = (updatedNote) => {
    editNote(note._id, {
      title: updatedNote.title,
      content: updatedNote.content
    });
  };

  // 3D tilt-toward-cursor effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
    const py = (e.clientY - rect.top) / rect.height; // 0 -> 1
    const tiltY = (px - 0.5) * 14; // rotateY
    const tiltX = (0.5 - py) * 14; // rotateX
    card.style.setProperty('--tilt-x', `${tiltX}deg`);
    card.style.setProperty('--tilt-y', `${tiltY}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <div
      ref={cardRef}
      className={`note-card${note.pinned ? ' pinned' : ''}`}
      style={{
        background: note.color && note.color !== '#ffffff' ? note.color : undefined,
        '--glow': note.color && note.color !== '#ffffff' ? note.color : undefined
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div>
        <button
          className="edit"
          onClick={() => setShowEditModal(true)}
        >
          ✏️ Edit
        </button>
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
          className="archive"
          onClick={() =>
            editNote(note._id, {
              archived: !note.archived
            })
          }
        >
          {note.archived ? 'Unarchive' : 'Archive'}
        </button>
        <button className="delete" onClick={() =>
            editNote(note._id, {
              trashed: !note.trashed
            })
          }>
          {note.trashed ? 'Restore' : 'Trash'}
        </button>
      </div>
      {showEditModal && (
        <EditNoteModal
          note={note}
          onSave={handleEditSave}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default NoteCard;
import { useState } from 'react';

const EditNoteModal = ({ note, onSave, onClose }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const submit = () => {
    onSave({
      ...note,
      title,
      content
    });
    onClose();
  };

  return (
    <div className="edit-modal" onClick={onClose}>
      <div className="edit-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>✏️ Edit Note</h2>
        <input
          type="text"
          value={title}
          placeholder="Note Title"
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          value={content}
          placeholder="Take a note..."
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="edit-modal-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="save-btn" onClick={submit}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditNoteModal;
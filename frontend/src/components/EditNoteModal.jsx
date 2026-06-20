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
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <input
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={content}
          placeholder="Take a note..."
          onChange={(e) => setContent(e.target.value)}
        />
        <div>
          <button onClick={submit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditNoteModal;
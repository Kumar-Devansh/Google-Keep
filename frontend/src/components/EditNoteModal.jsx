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
    <div className='modal'>
      <div className='modal-content'>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={submit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditNoteModal;

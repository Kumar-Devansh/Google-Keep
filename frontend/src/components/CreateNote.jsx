import { useState, useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import ColorPicker from './ColorPicker';

const CreateNote = () => {
  const { addNote } = useContext(NoteContext);
  const [note, setNote] = useState({ title: '', content: '', color: '#ffffff' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!note.title && !note.content) return;
    try {
      await addNote(note);
      setNote({ title: '', content: '', color: '#ffffff' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="create-note" onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />

      <textarea
        placeholder="Take a note..."
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      />

      <ColorPicker
        selected={note.color}
        onSelect={(color) => setNote({ ...note, color })}
      />

      <button type="submit">Add Note</button>
    </form>
  );
};

export default CreateNote;

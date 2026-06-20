import { createContext, useState, useEffect } from 'react';
import { getNotes, createNote, updateNote, deleteNote } from '../api/noteApi';

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await getNotes();
      setNotes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (note) => {
    const res = await createNote(note);
    setNotes((prev) => [res.data, ...prev]);
  };

  const editNote = async (id, data) => {
    const res = await updateNote(id, data);
    setNotes((prev) =>
      prev.map((note) => (note._id === id ? res.data : note))
    );
  };

  const removeNote = async (id) => {
    await deleteNote(id);
    setNotes((prev) => prev.filter((note) => note._id !== id));
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, removeNote, fetchNotes }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;

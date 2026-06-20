import Note from '../models/Note.js';

export const getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
};

export const createNote = async (req, res) => {
  const note = await Note.create({ ...req.body, user: req.user._id });
  res.status(201).json(note);
};

export const updateNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(updatedNote);
};

export const deleteNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  await note.deleteOne();
  res.json({ message: 'Note deleted' });
};
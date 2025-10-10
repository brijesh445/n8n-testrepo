// controllers/notesController.js
const Notes = require('../models/notesModel');

exports.getAllNotes = (req, res) => {
  res.json(Notes.getAll());
};

exports.getNoteById = (req, res) => {
  const id = parseInt(req.params.id);
  const note = Notes.getById(id);
  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }
  res.json(note);
};

exports.updateNote = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = Notes.update(id, req.body.content);
  if (!updated) {
    return res.status(404).json({ error: 'Note not found' });
  }
  res.json(updated);
};

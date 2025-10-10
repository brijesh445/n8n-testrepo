// models/notesModel.js

let notes = [
  { id: 1, content: 'First note' },
  { id: 2, content: 'Second note' }
];

module.exports = {
  getAll: () => notes,
  getById: (id) => notes.find(n => n.id === id),
  update: (id, content) => {
    const note = notes.find(n => n.id === id);
    if (note) {
      note.content = content;
      return note;
    }
    return null;
  }
};

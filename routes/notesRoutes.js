// routes/notesRoutes.js
const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.get('/', notesController.getAllNotes);
router.get('/:id', notesController.getNoteById);
router.put('/:id', notesController.updateNote);

module.exports = router;

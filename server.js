
const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notesRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/notes', notesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 8080;

// read notes from notes.json file or create empty array if file does not exist
let notes = fs.existsSync('./json/notes.json') ? JSON.parse(fs.readFileSync('./json/notes.json')) : [];

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('.../public/translations', express.static('translations'));

// GET endpoint to retrieve all notes
app.get('/notes', (req, res) => {
  res.send(notes);
});

// POST endpoint to add a note
app.post('/notes', (req, res) => {
  const newNote = req.body.note;
  notes.push(newNote);
  fs.writeFileSync('./json/notes.json', JSON.stringify(notes));
  res.send('Note added');
});

// DELETE endpoint to remove a note
app.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  notes.splice(id, 1);
  fs.writeFileSync('./json/notes.json', JSON.stringify(notes));
  res.send('Note deleted');
});

app.listen(port, () => {
  console.log(`Notes app listening on port http://localhost:${port}`);
});

/*
  Notes to myself:
  See how other people have created similar apps: 
  This one was specifically used for making a notes app: https://www.geeksforgeeks.org/how-to-build-note-taking-application-using-node-js/ 
  https://github.com/viakeegan/notes-are-kee/blob/main/server.js
  https://blog.devgenius.io/learning-nodejs-by-creating-a-notes-app-9eafc4223306

  npm install express ejs body-parser

  git reset --hard 
  git pull

  ^ Those commands for when you have made local changes, but want to ignore them and overwrite them from the repo

  Also remember to test server out by "npm run dev" in package.json' (install nodemon for refresh of server for every change via -> "npm install -g nodemon" nodemon on mac)
*/
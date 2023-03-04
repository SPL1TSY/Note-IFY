import express from 'express';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 8080;

// read notes from notes.json file or create empty array if file does not exist
let notes = fs.existsSync('./json/notes.json') ? JSON.parse(fs.readFileSync('./json/notes.json')) : [];

app.use(express.static('public'));
app.use(express.json()); //Tells the program that we're using .JSON files to transport info to body

app.use('.../public/translations', express.static('translations'));

// GET endpoint to retrieve all notes
app.get('/notes', (req, res) => {
  res.send(notes);

});

// GET endpoint to retrieve favourites
/*app.get('/favourites', (req, res) => {
  
});

// GET endpoint to retrieve login
app.get('/login', (req, res) => {
  
});*/

app.post('/register', async (req, res) => {
  let userMatch = users.find((user) => req.body.email === user.email);
})


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

// PUT endpoint to update a note on the server when the user changes a note
app.put('/notes/:id', (req, res) => {
  const id = req.params.id;
  const updatedNote = req.body.note;

  if (!updatedNote) {
    res.status(400).send('Note content is missing');
    return;
  }

  if (id >= notes.length) {
    res.status(404).send('Note not found');
    return;
  }

  notes[id] = updatedNote;
  fs.writeFileSync('./json/notes.json', JSON.stringify(notes));
  res.send('Note updated');
});

/*
  Notes to myself:
  See how other people have created similar apps: 
  This one was specifically used for making a notes app: https://www.geeksforgeeks.org/how-to-build-note-taking-application-using-node-js/ 
  https://github.com/viakeegan/notes-are-kee/blob/main/server.js
  https://blog.devgenius.io/learning-nodejs-by-creating-a-notes-app-9eafc4223306

  This guy helps a lot when it comes to SPA: -> Watch him when creating login stuff
  https://www.youtube.com/watch?v=wlVmmsMD28w

  npm install express ejs body-parser -> Don't need bodyparser anymore apparently from express 16+, you can use "app.use(express.json());" that line instead.

  git reset --hard 
  git pull

  ^ Those commands for when you have made local changes, but want to ignore them and overwrite them from the repo

  Also remember to test server out by "npm run dev" in package.json' (install nodemon for refresh of server for every change via -> "npm install -g nodemon" nodemon on mac)
*/
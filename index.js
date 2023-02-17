import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.port || 8080;

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Notes app listening on port http://localhost:${port}`)
}); 

app.get ('/', async (req, res) => {
  //run code in here and stuff
  res.send ('Server is running');

});

/*
  Notes to myself:
  Continue watching this tut, about 5mins in: https://www.youtube.com/watch?v=wYALykLb5oY 
  Also use this one from Geeksforgeeks //specifically used for making a notes app: https://www.geeksforgeeks.org/how-to-build-note-taking-application-using-node-js/ 
  https://github.com/viakeegan/notes-are-kee/blob/main/server.js
  https://blog.devgenius.io/learning-nodejs-by-creating-a-notes-app-9eafc4223306

  npm install express ejs body-parser

  git reset --hard 
  git pull

  ^ Those commands for when you have made local changes, but want to ignore them and overwrite them from the repo

  Also remember to test server out by "npm run dev" in package.json' (install nodemon for refresh of server for every change via -> "npm install -g nodemon" nodemon on mac)
*/
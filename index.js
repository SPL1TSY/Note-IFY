import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Notes app listening on port http://localhost:${port}`)
}); 

app.get ('/', async (request, response) => {
  //run code in here and stuff98765r4e3w2q1
  response.send ('Server is running');
});

/*
app.get('/', (req, res) => {
  res.send('The server on notes app is working! Continue watching this tut, about 5mins in: https://www.youtube.com/watch?v=wYALykLb5oY :)
  Also remember to test server out by "npm run dev" in package.json' -> "npm install -g nodemon" to install nodemon on mac)
})*/
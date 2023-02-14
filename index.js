const express = require('express');
const app = express();
const port = 8080;

//const router = new express.Router();

/*router.get("/number", function (req, res, next){
  const number = Math.Rround(Math.random() = Number.MAX_SAFE_INTEGER);
})*/

app.use(express.static('public'));

/*app.get('/', (req, res) => {
  res.send('The server on notes app is working! Test. Continue watching this tut, about 5mins in: https://www.youtube.com/watch?v=wYALykLb5oY :)
  Also remember to test server out by "npm run dev" in package.json' -> "npm install -g nodemon" to install nodemon on mac)
})*/

app.listen(port, () => {
  console.log(`Notes app listening on port http://localhost:${port}`)
}); 

//export default router;
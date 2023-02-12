const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

/*app.get('/', (req, res) => {
  res.send('The server on notes app is working! And I'm testing it right now! Continue watching this tut, about 5mins in: https://www.youtube.com/watch?v=wYALykLb5oY :)
  Also remember to test server out by "npm run dev" in package.json')
})*/

app.listen(port, () => {
  console.log(`Notes app listening on port http://localhost:${port}`)
});
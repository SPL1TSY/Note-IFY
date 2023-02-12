const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

/*app.get('/', (req, res) => {
  res.send('The server on notes app is working! :)')
})*/

app.listen(port, () => {
  console.log(`Notes app listening on port http://localhost:${port}`)
});
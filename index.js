const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Notes app listening on port http://localhost:${port}`)
}); 

app.get ('/notes', async (request, response) => {
  //run code stuff
});


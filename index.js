const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Notes app listening on port http://localhost:${port}`)
}); 

app.get ('/', async (request, response) => {
  //run code in here and stuff
  response.send ('Hello world');
});


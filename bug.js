const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is a potential error if fs.readFile throws an error
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
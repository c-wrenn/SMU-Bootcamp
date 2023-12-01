const express = require('express');
const path = require('path');

const app = express(); //we can use this app variable to attach a route
const PORT = 5502;

// TODO: Invoke app.use() and serve static files from the '/public' folder
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

// TODO: Create a route that will serve up the `public/paths.html` page
app.get('/paths',(req, res) => {
  res.sendFile(path.jpon(__dirname, 'public/paths.html')); 
})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


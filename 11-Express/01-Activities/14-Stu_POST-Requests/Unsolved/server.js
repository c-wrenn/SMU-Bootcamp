const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
  const message = `${req.method} request at ${req.path} has been recieved!`;
  console.log(message);
  res.send(message);
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
  const message = `${req.method} request at ${req.path} has been recieved!`;
  console.log(message);
  res.send(message);
})
// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here
  const message = `${req.method} request at ${req.path} has been recieved!`;
  console.log(message);
  res.send(message);
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
app.post('/api/upvotes', (req, res) => {
  // Your code here
  const message = `${req.method} request at ${req.path} has been recieved!`;
  console.log(message);
  res.send(message);
});


app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);

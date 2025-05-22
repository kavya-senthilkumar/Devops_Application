const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve a response on the root route
app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js app!');
});

// Listen on all interfaces (0.0.0.0) so it's accessible from the host
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

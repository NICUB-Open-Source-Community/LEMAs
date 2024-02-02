const express = require('express');
const app = express();
const port = 3000;

// Define routes
app.get('/', (req, res) => {
    res.send('Hello from your backend server!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

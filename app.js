// app.js
const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.render('index'); 
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// Configure Express to look for .html files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


const express = require("express");
const router = express.Router();

// Define a simple route
router.get('/', (req, res) => {
    res.render('index'); 
});

// // Start the server
// router.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



module.exports = router;
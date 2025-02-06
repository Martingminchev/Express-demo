// routes/routes.js
// Create an Express Router instance to handle routes for our API.
const router = require('express').Router();

// Import controller functions from the controllers file.
// The controller functions contain the logic.
const controller = require('../controllers/controllers');

// Define a GET endpoint at '/test/getTest' that invokes the getTest controller function.
router.get('/getTest', controller.getTest);

// Define a POST endpoint at '/test/postTest' that invokes the postTest controller function.
router.post('/postTest', controller.postTest);

// Export the router so it can be mounted in index.js.
module.exports = router;

/*
Data Flow in routes.js:
1. When a request is made to '/test/getTest' or '/test/postTest', the Express Router 
   matches the route and calls the corresponding controller function.
2. The controller then processes the request, possibly interacting with the model.
3. The controller sends a response back to the client.
*/

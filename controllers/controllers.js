// controllers/controllers.js
// Import the Mongoose model for "Test". This model allows us to interact with the MongoDB collection. 
const Test = require('../models/models');

/**
 * Controller function for handling GET requests.
 * This function currently sends a static message but can be extended to
 * interact with the database (e.g., retrieving documents).
 */
const getTest = async (req, res) => {
  try {
    // Respond with a JSON message indicating that this is the getTest endpoint.
    res.send({ ok: true, message: 'coming from getTest' });
  } catch (error) {
    // In case of an error, send a response with an error message.
    res.send({ ok: false, message: error.message });
  }
};

/**
 * Controller function for handling POST requests.
 * This function currently sends a static message but can be extended to
 * interact with the database (e.g., creating a new document).
 */

const postTest = async (req, res) => {
  try {
	const newTest = await Test.create({
		string: "My Unique String", // a unique string value
		number: 42,                 // a unique number value
		array: ["item1", "item2"]   // a unique array of items
		// 'created' is optional; if not provided, it defaults to Date.now
	  })
    // Respond with a JSON message indicating that this is the postTest endpoint.
    res.send({ ok: true, message: 'coming from postTest' });
  } catch (error) {
    // In case of an error, send a response with an error message.
    res.send({ ok: false, message: error.message });
  }
};

//****  Example to create a new instance of Test document in the Database   ****************
const newTest = await Test.create({
	string: "My Unique String", // a unique string value
	number: 42,                 // a unique number value
	array: ["item1", "item2"]   // a unique array of items
	// 'created' is optional; if not provided, it defaults to Date.now
  })

// Export the controller functions so that they can be used in the routes.
module.exports = { 
  getTest,
  postTest
};

/*
Data Flow in controllers.js:
1. When a request is received at a route (e.g., '/test/getTest'), the corresponding controller function is invoked.
2. The controller may interact with the Test model to perform database operations (e.g., find, create, update).
3. After processing, the controller sends a JSON response back to the client.
4. If any errors occur, the controller catches them and sends an error response.
*/




// Below is a list of common Mongoose commands for a basic CRUD app:

// Create

// Model.create(doc)
// new Model(doc).save()

// Read

// Model.find({})
// Model.findOne({category:'hats'})
// Model.findById(id)

// Update

// Model.updateOne(query, update)
// Model.updateMany(query, update)
// Model.findByIdAndUpdate(id, update, options)
// Model.findOneAndUpdate(query, update, options)
// Delete

// Model.deleteOne(query)
// Model.deleteMany(query)
// Model.findByIdAndDelete(id)
// Model.findOneAndDelete(query)

//In Model.find({ string: "Alice" }), the query is { string: "Alice" }. 
// This tells Mongoose to find all documents where the string field is exactly "Alice".
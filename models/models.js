// models/models.js
// Import Mongoose to define schemas and interact with MongoDB.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a Mongoose schema for a "Test" document.
// This schema describes the shape of the data and includes field requirements.
const TestSchema = new mongoose.Schema({
  // A string field that is required and must be unique.
  string: { 
    type: String, 
    required: true,
    unique: true
  },
  // A number field that is required and must be unique.
  number: {
    type: Number, 
    required: true,
    unique: true
  },
  // An array field that is required and must be unique.
  array: {
    type: Array,
    required: true,
    unique: true
  },
  // A date field that defaults to the current date/time if not provided.
  created: { 
    type: Date, 
    default: Date.now 
  }
});

// Create a Mongoose model named "Test" based on the TestSchema.
// This model provides an interface to interact with the "tests" collection in MongoDB.
const Test = mongoose.model('Test', TestSchema);

//Or pass a third argument to model to interact with the database under custom name(allias)
//const Test = mongoose.model('Test', TestSchema, 'myCustomCollection');



// Export the Test model for use in controllers and elsewhere.
module.exports = Test;

/*
Data Flow in models.js:
1. The Mongoose model "Test" defines the structure and validation for documents in the MongoDB collection.
2. When a controller creates, reads, or updates a "Test" document, it uses this model.
3. Mongoose handles communication with MongoDB using the connection established in index.js.
*/

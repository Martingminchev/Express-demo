// index.js
// Create an instance of the Express application by immediately invoking require('express')()
const app = require('express')();

// Load environment variables from a .env file into process.env
require("dotenv").config();

// Set the port from the environment variable or default to 4444
const port = process.env.PORT || 4444; 

// --------------------------------------------------------------------
// Body Parsing Middleware: These middleware functions parse incoming
// request payloads and populate req.body with the parsed data.
// --------------------------------------------------------------------
app.use(require("express").urlencoded({ extended: true }));
app.use(require("express").json());

// --------------------------------------------------------------------
// Database Connection: Connect to MongoDB using Mongoose.
// The connectingToDB function is an asynchronous function that tries to
// establish a connection to the MongoDB database specified in process.env.MONGO.
// --------------------------------------------------------------------

async function connectingToDB() {
  try {
    await require("mongoose").connect(process.env.MONGO, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to the DB ✅");
  } catch (error) {
    console.log("ERROR: Your DB is not running, start it up ☢️");
  }
}
connectingToDB();

// --------------------------------------------------------------------
// CORS Middleware: Allows cross-origin requests.
// --------------------------------------------------------------------
app.use(require('cors')());

// --------------------------------------------------------------------
// Mounting Routes: All requests starting with '/test' will be handled by
// the routes defined in './routes/routes.js'. These routes delegate work
// to controllers which may interact with models (Mongoose and MongoDB).
// --------------------------------------------------------------------
app.use('/test', require('./routes/routes.js'));

// --------------------------------------------------------------------
// Start the Server: Listen for incoming requests on the specified port.
// --------------------------------------------------------------------
app.listen(port, () => console.log("🚀 Listening on port: " + port + " 🚀"));

/*
Data Flow in index.js:
1. A client sends an HTTP request (e.g., GET/POST to '/test/getTest' or '/test/postTest').
2. The request is first processed by body parsing middleware to populate req.body.
3. Mongoose (initialized in connectingToDB) ensures that any model operations 
   interact with the connected MongoDB database.  
4. The '/test' route prefix routes requests to the router defined in routes.js.  
5. Express listens on the specified port and responds to incoming requests.
*/


//The actual MongoDB database resides in a running MongoDB instance.
// This can be on your local machine (for example, at mongodb://localhost:27017/yourDatabaseName)
 //  or on a remote server (such as a MongoDB Atlas cluster).

//  After a successful connection, any Mongoose model (created via mongoose.model()) will interact with the specified database.
//   When you use commands like Model.create(), Model.find(), etc., Mongoose uses the active connection to run those operations
//    against your MongoDB database.
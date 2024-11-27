const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();

// Set up EJS as the template engine
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static('public')); // Serve static files from 'public' folder
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(session({
  secret: 'I am just a chill guy!',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure: true in production with HTTPS
}));

const port = 3000;
const uri = "mongodb+srv://sam:123pass@swe432.hafol.mongodb.net/?retryWrites=true&w=majority&appName=swe432";

// Database Connection
async function connectDB() {
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    });
    console.log("Connected to MongoDB Atlas!");
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err);
    process.exit(1); // Exit process on connection failure
  }
}
connectDB();

// Define DJ schema and model
const djSchema = new mongoose.Schema({
  name: String,
  experience: String,
  rated: Number,
  assignedDate: Date
});
const DJ = mongoose.model('DJ', djSchema);

// Fetch DJs from the database on startup
let DJ_List = [];
async function fetchDJs() {
  try {
    DJ_List = await DJ.find(); // Fetch all DJs and store in memory
    console.log("Fetched DJs and stored them in memory:", DJ_List);
  } catch (err) {
    console.error("Error fetching DJs:", err);
  }
}
fetchDJs();

// Routes
app.get('/', (req, res) => {
  const username = req.session.username;
  if (!username) {
    return res.redirect('/login'); // Redirect to login
  }
  res.render("home.ejs", {username});
});

app.get('/login', (req, res) => {
  res.render("index.ejs");
});

app.post('/login', (req, res) => {
  const { username } = req.body;

  if (username === "Mike Reep") {
      req.session.username = username;
      res.status(200).send({ message: "Login successful", username });
  } else {
      res.status(401).send({ message: "Invalid username" });
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy(err => {
      if (err) {
          console.error('Error during logout:', err);
          return res.status(500).send({ message: 'Logout failed' });
      }
      res.clearCookie('connect.sid'); // Clear the session cookie
      res.status(200).send({ message: 'Logged out successfully!' });
  });
});

app.get('/scheduler', async (req, res) => {
  try {
    const currentDJ = {
      name: '',
      experience: '',
      rated: '',
      assignedDate: ''
    };
    res.render("scheduler.ejs", { currentDJ });
  } catch (err) {
    console.error("Error fetching DJs:", err);
    res.status(500).send("Error fetching DJs");
  }
});

app.get('/scheduler/:id', async (req, res) => {
  try {
    const DJ_List = await DJ.find(); // Fetch all DJs dynamically for this request
    const id = parseInt(req.params.id, 10); // Convert id to a number
    if (isNaN(id) || id < 0 || id >= DJ_List.length) {
      return res.status(404).send("Invalid DJ ID");
    }
    const currentDJ = DJ_List[id];
    res.render("scheduler.ejs", { currentDJ });
  } catch (err) {
    console.error("Error fetching DJs:", err);
    res.status(500).send("Error fetching DJs");
  }
});

app.post('/submit', async (req, res) => {
  const { name, selectedDate } = req.body; // Extract the name and date from the request

  if (!name || !selectedDate) {
    return res.status(400).send({ message: "DJ name and selectedDate are required" });
  }

  try {
    // Find and update the DJ by name
    const updatedDJ = await DJ.findOneAndUpdate(
      { name },
      { assignedDate: selectedDate },
      { new: true }
    );

    if (!updatedDJ) {
      return res.status(404).send({ message: "DJ not found" });
    }

    res.status(200).send({ message: "Date updated successfully", updatedDJ });
  } catch (err) {
    console.error("Error updating DJ:", err);
    res.status(500).send({ message: "Error updating DJ", error: err });
  }
});

app.get('/report', async (req, res) => {
  try {
    const DJ_Report = await DJ.find(); // Fetch all DJs for the report
    res.render("report.ejs", { DJ_Report });
  } catch (err) {
    console.error("Error fetching report data:", err);
    res.status(500).send("Error generating report");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
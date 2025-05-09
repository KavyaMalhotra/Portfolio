import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import cors from 'cors';
import axios from 'axios';


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.Frontend_URL, 
  methods: ['POST'],
}));

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

const ratingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Rating = mongoose.model('Rating', ratingSchema);


connectDB();


// Route to get a random joke from a public API
app.get('/api/joke', async (req, res) => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke'); // Replace with your joke API
    const joke = response.data.setup + " " + response.data.punchline; // Combining setup and punchline
    res.json({ joke });  // Send back the joke to the frontend
  } catch (error) {
    console.error('Error fetching joke:', error);
    res.status(500).json({ error: 'Failed to fetch joke.' });
  }
});

// POST route to receive password and send back hash
app.post('/backend', async (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    res.json({ hashedPassword });
  } catch (err) {
    console.error('Error hashing password:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// POST route to add rating to MongoDB
app.post('/save-rating', async (req, res) => {
  try {
    const { name, rating } = req.body;

    if (!name || !rating) {
      return res.status(400).json({ error: 'Name and rating are required' });
    }

    const newRating = new Rating({ name, rating });
    await newRating.save();

    // Get the total number of ratings
    const totalRatings = await Rating.countDocuments();

    res.json({
      message: 'Thanks for your rating! It has been saved in the database.',
      totalRatings: totalRatings, // Send total ratings number
    });
  } catch (err) {
    console.error('Error saving rating:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});





// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

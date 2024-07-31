const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection string
const dbURI = 'mongodb+srv://abhijnarao11:abhi1128@cluster0.dmdrozp.mongodb.net/';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define Booking Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  checkIn: String,
  checkOut: String,
  noGuest: String,
  noRoom: String,
  mobileNumber: String,
  email: String
});

// Create Booking model
const Booking = mongoose.model('Booking', bookingSchema);

// Define routes
app.post('/api/bookings', async (req, res) => {
  const bookingData = req.body;
  try {
    const newBooking = new Booking(bookingData);
    await newBooking.save();
    res.status(201).send(newBooking);
  } catch (error) {
    res.status(500).send({ message: 'Error saving booking', error });
  }
});

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

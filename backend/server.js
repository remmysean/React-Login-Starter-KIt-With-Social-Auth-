const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Replace with your actual User model
require('dotenv').config();

const app = express();

app.use(express.json()); // For parsing JSON
app.use(cors()); // For enabling Cross-Origin requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Google OAuth Client Setup
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Ensure GOOGLE_CLIENT_ID is set in your .env file

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Google OAuth Login Route
app.post('/api/auth/google', async (req, res) => {
    const { token } = req.body;
    try {
        // Verify Google Token
        const ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID, // Ensure this matches the OAuth client ID
        });

        const { name, email } = ticket.getPayload();

        // Check if user exists or create a new one
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ name, email, password: null }); // Google users won't have passwords
        }

        // Generate JWT Token
        const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'YOUR_SECRET_KEY', { expiresIn: '1d' });

        res.json({ token: jwtToken });
    } catch (error) {
        console.error('Error during Google OAuth:', error);
        res.status(400).json({ message: 'Invalid Google token' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

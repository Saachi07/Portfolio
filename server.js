const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
// Serve static files from current directory

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // or 'outlook', 'yahoo', etc.
    auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS  // your app password
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    console.log('Contact form request received:', req.body);
    
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `New Contact Message from ${name}`,
            html: `
                <h2>New Contact Message from Your Portfolio</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <hr>
                <p><em>Sent from your portfolio contact form</em></p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.json({ 
            success: true, 
            message: 'Message sent successfully!' 
        });

    } catch (error) {
        console.error('Email error details:', error);
        console.error('Error message:', error.message);
        console.error('Error code:', error.code);
        
        let errorMessage = 'Failed to send message. Please try again.';
        
        if (error.code === 'EAUTH') {
            errorMessage = 'Email authentication failed. Please check your email credentials.';
        } else if (error.code === 'ECONNECTION') {
            errorMessage = 'Could not connect to email server. Please check your internet connection.';
        }
        
        res.status(500).json({ 
            success: false, 
            message: errorMessage,
            error: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Test endpoint for debugging
app.get('/api/test', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Backend is working!',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 

app.use(express.static('.')); 
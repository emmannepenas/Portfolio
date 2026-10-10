const express = require ('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gamil',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if(!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All field are required'});
    }

    try {
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Message from ${name}`,
            html: `
            <div style="font-family: Arial, sans-serif, padding: 20px, background: #f4f6f8, border-radius: 8px;>
            <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f6f8; border-radius: 8px;">
                    <h2 style="color: #0d2538;">New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #ddd;">${message}</p>
                </div>`
        };

        await transporter.sendMail(mailOptions);
        
        return res.status(200).json({sucesss: true, message: 'Message sent successful'});
    } catch(error) {
        console.error('Error sending message....', error);
        return res.status(500).json({ success: false, error: 'Failed to send email. '})
    }
});

app.listen9PORT, () => {
    console.log(`Server is running on https://locaLhost:${PORT}`);
};
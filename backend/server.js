import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// API route to handle contact form
app.post("/send-query", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: "All fields are required" });
    }

    try {
        // Email to website owner
        await transporter.sendMail({
            from: `"MetaMesh Labs" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "New Query from Website",
            html: `
                <h2>New Query Received</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `
        });

        // Confirmation email to user
        await transporter.sendMail({
            from: `"MetaMesh Labs" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "We Received Your Query",
            html: `
                <h3>Hi ${name},</h3>
                <p>Thank you for contacting MetaMesh Labs.</p>
                <p>We have received your message and will get back to you soon.</p>
            `
        });

        res.json({ success: true });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ success: false, error: "Failed to send email" });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

// HOSTINGER SMTP SETTINGS
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
        user: "info@metameshlabs.com",
        pass: "MetaMesh@Lab01"
    }
});

// API ROUTE
app.post("/send-query", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Email to Website Owner
        await transporter.sendMail({
            from: `"MetaMesh Labs" <info@metameshlabs.com>`,
            to: "info@metameshlabs.com",
            subject: "New Query from Website",
            html: `
                <h2>New Query Received</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `
        });

        // Confirmation to User
        await transporter.sendMail({
            from: `"MetaMesh Labs" <info@metameshlabs.com>`,
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
        console.log(error);
        res.json({ success: false, error });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));

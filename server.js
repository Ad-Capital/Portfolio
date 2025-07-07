// server.js

const express = require('express');
const next = require('next');
const nodemailer = require('nodemailer');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  server.post('/api/contact', async (req, res) => {
    const { fullname, email, service, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: 'adxkap@example.com',
      subject: `Service Request from ${fullname}`,
      text: `Name: ${fullname}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.json({ msg: ['Email sent successfully!'], success: true });
    } catch (error) {
      res.status(500).json({ msg: ['Failed to send email.'], success: false });
    }
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});

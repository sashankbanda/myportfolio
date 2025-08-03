const nodemailer = require('nodemailer');
// require('dotenv').config();

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: 'Missing required fields',
    };
  }

  // Use a service like SendGrid, Mailgun, or just a generic SMTP server
  // You will need to replace this with your own email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Example: Using Gmail as a service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your app password or regular password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Replace with your receiving email address
    subject: `New contact from your portfolio website from ${name}`,
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email.' }),
    };
  }
};

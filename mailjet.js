// Import dependencies
const Mailjet = require("node-mailjet");
require("dotenv").config();

// Mailjet API connection
const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

// Send OTP email function
async function sendOTP(email, otp) {
  try {
    const request = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_SENDER_EMAIL,
            Name: "Password Reset",
          },
          To: [{ Email: email }],
          Subject: "Your OTP for Password Reset",
          TextPart: `Your OTP for password reset is ${otp}`,
          HTMLPart: `<p>Your OTP for password reset is <strong>${otp}</strong></p>`,
        },
      ],
    });

    console.log("✅ OTP email sent successfully!", request.body);
    return request.body;
  } catch (error) {
    console.error("❌ Error sending OTP email:", error);
    throw new Error("Failed to send OTP email");
  }
}

// Export function
module.exports = { sendOTP };

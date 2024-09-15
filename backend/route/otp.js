const express = require('express');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../model/User');
const router = express.Router();

// Send OTP
router.post('/send-otp', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const otp = crypto.randomInt(100000, 999999).toString();
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    });

    res.json({ message: 'OTP sent' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.json({ message: 'OTP verified' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

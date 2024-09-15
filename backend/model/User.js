const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

// Generate JWT token
userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

module.exports = mongoose.model('User', userSchema);

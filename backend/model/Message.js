const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  text: String,
  fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);

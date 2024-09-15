const express = require('express');
const Chat = require('../model/Chat'); // Assuming you have a Chat model
const authMiddleware = require('../middleware/Auth'); // Middleware to protect routes
const router = express.Router();

// Create a new chat
router.post('/create', authMiddleware, async (req, res) => {
  try {
    const { participants, messages } = req.body;

    if (!participants || !Array.isArray(participants)) {
      return res.status(400).json({ message: 'Participants are required and should be an array' });
    }

    const chat = new Chat({
      participants,
      messages,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await chat.save();
    res.status(201).json(chat);
  } catch (error) {
    console.error('Error creating chat:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all chats for a user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // User ID from auth middleware
    const chats = await Chat.find({ participants: userId });
    res.json(chats);
  } catch (error) {
    console.error('Error fetching chats:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a specific chat by ID
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const chatId = req.params.id;
    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    res.json(chat);
  } catch (error) {
    console.error('Error fetching chat:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a message to a chat
router.post('/:id/message', authMiddleware, async (req, res) => {
  try {
    const chatId = req.params.id;
    const { sender, content } = req.body;

    if (!sender || !content) {
      return res.status(400).json({ message: 'Sender and content are required' });
    }

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    chat.messages.push({
      sender,
      content,
      timestamp: new Date(),
    });

    chat.updatedAt = new Date();
    await chat.save();

    res.json(chat);
  } catch (error) {
    console.error('Error adding message:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a chat
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const chatId = req.params.id;

    const chat = await Chat.findByIdAndDelete(chatId);

    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    res.json({ message: 'Chat deleted' });
  } catch (error) {
    console.error('Error deleting chat:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

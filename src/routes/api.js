const express = require('express');
const router = express.Router();

// Example route with param
router.get('/items/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: 'Example Item',
    description: 'This is an example item'
  });
});

// Example GET route
router.get('/items', (req, res) => {
  res.json([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);
});

// Example POST route
router.post('/items', (req, res) => {
  const { name, description } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  
  // Here you would typically save the item to a database
  res.status(201).json({
    id: Date.now(),
    name,
    description,
    createdAt: new Date()
  });
});

module.exports = router;
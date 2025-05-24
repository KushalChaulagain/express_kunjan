// Example controller for items
// You can use this structure to organize your code better

const getItems = (req, res) => {
  // In a real app, you'd fetch from a database
  const items = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ];
  
  res.json(items);
};


const createItem = (req, res) => {
  const { name, description } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  

  console.log("Final defense")

  // In a real app, you'd save to a database
  const newItem = {
    id: Date.now(),
    name,
    description,
    createdAt: new Date()
  };
  
  res.status(201).json(newItem);
};

module.exports = {
  getItems,
  getItemById,
  createItem
};
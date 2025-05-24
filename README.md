# Express.js Project for Sprint

A starter Express.js API project with basic setup and structure.

## Quick Start with GitHub Codespaces

The fastest way to start coding is to use GitHub Codespaces:

1. Click the "Code" button above
2. Select the "Codespaces" tab
3. Click "Create codespace on main"

This will open a fully configured development environment in your browser with all dependencies installed and ready to go!

## Features

- Express.js server with common middleware
- Structured routes and controllers
- Error handling middleware
- Environment configuration with dotenv
- Development mode with nodemon

## Getting Started

1. Clone this repository
2. Run `npm install` to install dependencies
3. Copy `.env.example` to `.env` and update as needed
4. Run `npm run dev` to start the development server

## Project Structure

```
├── src/                  # Source code
│   ├── controllers/      # Route controllers
│   ├── routes/           # Express routes
│   ├── index.js          # Entry point
├── .env.example          # Example environment variables
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## API Endpoints

- GET / - Base route returning server status
- GET /api/items - Get all items
- GET /api/items/:id - Get item by ID
- POST /api/items - Create a new item

## Scripts

- `npm start` - Start the server
- `npm run dev` - Start the server with nodemon

## Learn More

To learn more about Express.js, check out the [Express.js documentation](https://expressjs.com/).
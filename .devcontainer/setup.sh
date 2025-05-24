#!/bin/bash
set -e

echo "📦 Installing dependencies..."
npm install

# Copy .env.example to .env if it doesn't exist
if [ ! -f .env ]; then
  echo "Creating .env file from .env.example..."
  cp .env.example .env
fi

# Create a welcome message for the terminal
echo -e "\n\033[1;32m✅ Express.js development environment is ready!\033[0m"
echo -e "\033[1;34m→ Run 'npm run dev' to start the development server with auto-reload\033[0m"
echo -e "\033[1;34m→ API will be available at http://localhost:3000\033[0m"
echo -e "\033[1;34m→ Thunder Client extension is installed for API testing\033[0m\n"

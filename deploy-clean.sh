#!/bin/bash

# Clean deployment script for production
echo "🧹 Cleaning project for production deployment..."

# Remove build artifacts
echo "Removing .next directory..."
rm -rf .next

# Remove node_modules
echo "Removing node_modules..."
rm -rf node_modules

# Remove package-lock.json
echo "Removing package-lock.json..."
rm -f package-lock.json

# Install fresh dependencies
echo "Installing fresh dependencies..."
npm install

# Build the project
echo "Building project..."
npm run build

echo "✅ Project is ready for production deployment!"
echo "📦 Build artifacts are in .next directory"
echo "🚀 You can now deploy to Vercel or your preferred platform"

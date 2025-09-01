#!/bin/bash

# Deployment preparation script for Portfolio

echo "🚀 Preparing portfolio for deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build the project
echo "🏗️  Building project..."
npm run build

# Preview the build locally
echo "👀 Starting preview server..."
echo "Visit http://localhost:4173 to preview your build"
npm run preview

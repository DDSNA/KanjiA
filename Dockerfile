# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]

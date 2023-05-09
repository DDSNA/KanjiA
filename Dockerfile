# Use an official Node runtime as a parent image
FROM node

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app
RUN npm run build

# Use an official Nginx runtime as a base image
FROM nginx

# Copy the built Angular app from the previous stage to the container
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Expose the default Nginx port
EXPOSE 80

# Start the Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]


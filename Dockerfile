# Use an official Nginx runtime as a base image
FROM nginx:latest

# Copy the Nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Set the working directory to the Nginx web root directory
WORKDIR /usr/share/nginx/html

# Copy the static web content to the container
COPY static-html-directory .

# Expose the default Nginx port
EXPOSE 80

# Start the Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]


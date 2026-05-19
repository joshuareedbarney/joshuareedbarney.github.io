# Use the official Nginx image based on Alpine Linux for a small footprint
FROM nginx:alpine

# Copy the static website files to the Nginx html directory
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

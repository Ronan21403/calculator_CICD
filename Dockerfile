# Use official Node image as base (can also use nginx if you prefer)
FROM node:18-alpine

# Install 'serve' globally to serve static files
RUN npm install -g serve

# Create app directory
WORKDIR /app

# Copy project files
COPY calculator .

# Expose port and start the static server
EXPOSE 3000
CMD ["serve", ".", "-l", "3000"]

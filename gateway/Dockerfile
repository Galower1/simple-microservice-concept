# Use an official Node.js runtime as a parent image
FROM node:19-alpine3.16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose port 3000 for the app
EXPOSE 3005

# Start the app using the "start" command from the package.json file
CMD ["npm", "start"]

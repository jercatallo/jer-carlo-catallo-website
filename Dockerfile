# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local source files to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 80

# Define the command to run the application
CMD ["npm", "start"]

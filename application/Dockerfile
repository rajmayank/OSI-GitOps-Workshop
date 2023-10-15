# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle your app source
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Define an environment variable for the background color (you can override it when running the container)
ENV BG_COLOR lightgreen

# Command to run your Node.js application
CMD ["node", "app.js"]

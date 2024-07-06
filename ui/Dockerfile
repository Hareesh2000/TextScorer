# Use a base image with Node.js
FROM node:18-alpine3.19

# Set the working directory
WORKDIR /ui

# Copy package.json and package-lock.json
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the app will run
EXPOSE 5173

# Add local node_modules/.bin to PATH
ENV PATH /ui/node_modules/.bin:$PATH

# Set the command to start the app
CMD ["npm", "run", "dev"]
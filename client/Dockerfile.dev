# Specify a base image
FROM node:alpine

# Specify a work app directory
WORKDIR /usr/app

# Copy package.json
COPY ./package.json ./

# Install some dependencies
RUN npm install

# Copy files or folders from source to the dest path in the image's filesystem
COPY ./ ./

# Default command
CMD ["npm", "run", "start"]
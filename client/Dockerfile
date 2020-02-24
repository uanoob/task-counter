# Specify a base image: phase - build
FROM node:alpine as builder
# Specify a work app directory
WORKDIR /usr/app
# Copy package.json
COPY ./package.json ./
# Install some dependencies
RUN npm install
# Copy files or folders from source to the dest path in the image's filesystem
COPY ./ ./
# Run command
RUN npm run build

# Specify a base image: phase - run
FROM nginx
# Define the network ports that this container will listen on at runtime.
EXPOSE 80
# Copy folder from build stage to the dest path in the image's filesystem
COPY --from=builder /usr/app/build /usr/share/nginx/html
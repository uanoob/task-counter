# task-counter

React and Docker

## lists running docker containers

    - docker ps

## lists all docker containers

    - docker ps --all

## Stop one or more running containers

    - docker stop <containerID>

## Remove unused data

    - docker system prune --all

## build

    - docker build -t <containerID> .

## build container by specify development Dockerfile

    - docker build -f Dockerfile.dev .

## run app with port routing

    - docker run -p 8080:8080 <containerID>

## run nginx server with port routing

    - docker run -p 8080:80 <containerID>

## run app with shell

    - docker run -it <containerID> sh

## run a command in a running container with shell

    - docker exec -it <containerID> sh

## run a test command in a running container

    - docker run -it <containerID> npm run test

## run a test command in a running container with hot reload

    - docker exec -it <containerID> npm run test

## run containers with docker-compose

    - docker-compose up

## build containers with docker-compose

    - docker-compose build

## run containers with docker-compose in background

    - docker-compose up -d

## stop containers with docker-compose

    - docker-compose down

## list running containers with docker-compose

    - docker-compose ps

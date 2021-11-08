
# Node neo4j boilerplate by Michel Almeida.

A template for building APIs using Node.js, graph database neo4j , express.

# Getting started

## Installation

1. Install [Node.JS](https://nodejs.org/en/) LTS version
2. Install [neo4j](https://neo4j.com/download/)
3. Clone this repository and enter on the respective folder
4. Install dependencies running: `yarn` or `npm install`

## Things to do before run the project:

1. Create database (by follow the commands):

- CREATE USER `user` WITH PASSWORD `password`
- CREATE THE DATABASE `database`


2. Install [Docker](https://docs.docker.com/engine/install/)

- Pull redis: `docker pull redis`
- Create image: `docker run --name your-image-name -d redis`
- Start redis: `docker start your-image-name`

3. Run `yarn start` or `yarn start:dev` to start server

## Testing

1. Run tests: `yarn test`

## Directory Structure

```
├── /src
|   ├── /controllers
|   ├── /database
|   ├── /helpers
|   ├── /middleware
|   ├── /models
|   ├── /routes
|   ├── /validators
├── /test
```

## Postman

## Styleguide

## Database

This project uses ...  as ORM and ... as query builder.

## Database connection

http://localhost:7474/browser/

# Node neo4j boilerplate by Michel Almeida.

A template for building APIs using Node.js, graph database neo4j , express.

<img src="https://user-images.githubusercontent.com/37683337/144428200-4881288a-afea-40b0-bc54-e7cde537f80f.png" width="200">

# Getting started

## Installation

1. Install [Node.JS](https://nodejs.org/en/) LTS version
2. Install [neo4j](https://neo4j.com/download/)
3. Clone this repository and enter on the respective folder
4. Install dependencies running: `yarn` or `npm install`

## Things to do before run the project:

1. Create the database and user profile on neo4j client.

2. Copy the .env and add your values to variables.

   `$ cp .env.example .env`

3. Run `yarn start:dev` to start server.

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

## Test API

To test the api you can use something like postman or [inmsonia](https://insomnia.rest/download) to make the requests and see the returns from api.

Example:  

<img src="https://i.ibb.co/Bfj8crN/Captura-de-Tela-2021-12-12-a-s-15-20-28.png" width="600">

## Styleguide

If you use the vscode its a good choice download the eslint and prettier extension.

## Database

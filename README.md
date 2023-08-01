### API using Node.js, neo4j database, GraphQL, TypeScript, Hapi, and Express 4.

# Getting Started

## Installation

1. Install [Node.JS](https://nodejs.org/en/) LTS version
2. Install [neo4j](https://neo4j.com/download/)
3. Clone this repository and navigate to the cloned directory.
4. Install dependencies by running: `yarn` or `npm install`

--- 

## Before running the project:

#### 1. Create a database in neo4j desktop.

![image](https://user-images.githubusercontent.com/37683337/152645762-4fa8c827-ca16-48ec-8584-97c6aec1fdea.png)


#### 2. Create a new user, to do this, enter the neo4j desktop browser mode and go to the command input. 

 - First, check which users exist in your database. When freshly created, only the 'neo4j' user will appear. Use the command `SHOW USERS` to view.

```cypher 
  SHOW USERS
```

![image](https://user-images.githubusercontent.com/37683337/152645892-ddf695af-3556-4568-bd6a-eaca539ef5bc.png)



- The following command will create an 'admin' user with the password 'EXAMPLE@PASSWORD'.

```cypher
      CREATE USER example_admin IF NOT EXISTS
       SET PLAINTEXT PASSWORD 'EXAMPLE@PASSWROD'
       SET PASSWORD CHANGE REQUIRED
       SET STATUS ACTIVE
       SET HOME DATABASE neo4j 
```

For more user creation options, refer to [create-users](https://neo4j.com/docs/cypher-manual/current/access-control/manage-users/#:~:text=in%20Listing%20privileges.-,4.%20Creating%20users,-Users%20can%20be)


- The following command will grant the 'admin' role to the 'example_admin' user.

```cypher
   GRANT ROLE admin, PUBLIC TO example_admin
```

For more information, visit: [neo4j managing users](https://neo4j.com/docs/cypher-manual/current/access-control/manage-users/)



####  3. Copy the .env and add your values to variables.

   `$ cp .env.example .env`

Example .env file:

```javascript
 PORT=8000
 URL_DATABASE= neo4j://localhost:7687
 USERNAME_DATABASE= admin
 PASSWORD_DATABASE= example123
 DATABASE_NAME= neo4j
```



# Running the Project

1. Run the command `yarn start` in the terminal to start the server.
 ```shell
 $michel  `yarn start`
```

2. To run the tests, use the command `yarn test`:

 ```shell
 $michel  `yarn test`
```

3. To test the API:

To test the API, you can use tools like Postman or [Insomnia](https://insomnia.rest/download) to create requests and view the API's responses.

Example:  

<img src="https://i.ibb.co/Bfj8crN/Captura-de-Tela-2021-12-12-a-s-15-20-28.png" width="600">


## Styleguide

If you use VSCode, it's a good choice to download the ESLint and Prettier extensions.

## Database

The database documentation is available at: [Neo4j Documentation - FeiraOnline](https://github.com/Michelalmeidasilva/api-neo4j-typescript-template/blob/feat/neo4j/doc-neo4j-pt.md)

## Deployment Process 

Refer to the document [Deploy](https://github.com/Michelalmeidasilva/api-neo4j-typescript-template/blob/master/deploy-instructions.md) for deployment instructions.

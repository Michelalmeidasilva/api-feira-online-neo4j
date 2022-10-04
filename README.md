API utilizando Node.js, database neo4j, grapql, typescript, hapi and express 4.

# Iniciando

## Instalação

1. Instale o [Node.JS](https://nodejs.org/en/) LTS version
2. Instale o [neo4j](https://neo4j.com/download/)
3. Clone esse repositório e entre na pasta onde o mesmo foi clonado.
4. Instale as dependencias rodando: `yarn` or `npm install`

--- 

## Antes de rodar o projeto:

#### 1. Crie um banco de dados no neo4j desktop.

![image](https://user-images.githubusercontent.com/37683337/152645762-4fa8c827-ca16-48ec-8584-97c6aec1fdea.png)


#### 2. Crie um novo usuário, para isso entre no modo browser do neo4j desktop e vá para a input de comandos. 

 - Antes veja quais usuários existem no seu banco de dados, quando recém criado irá aparecer apenas o user neo4j, utilize o comando `SHOW USERS` para visualizar.

```cypher 
  SHOW USERS
```

![image](https://user-images.githubusercontent.com/37683337/152645892-ddf695af-3556-4568-bd6a-eaca539ef5bc.png)



- O comando abaixo irá criar um usuário admin, com a senha EXAMPLE@PASSWORD

```cypher
      CREATE USER example_admin IF NOT EXISTS
       SET PLAINTEXT PASSWORD 'EXAMPLE@PASSWROD'
       SET PASSWORD CHANGE REQUIRED
       SET STATUS ACTIVE
       SET HOME DATABASE neo4j 
```

para mais opções de criação do usuário vá em [create-users](https://neo4j.com/docs/cypher-manual/current/access-control/manage-users/#:~:text=in%20Listing%20privileges.-,4.%20Creating%20users,-Users%20can%20be)


- O comando abaixo vai permitir que o usuário admin tenha as permissões de um administrador

```cypher
   GRANT ROLE admin, PUBLIC TO example_admin
```


Para mais informações, acesse : [neo4j managing users](https://neo4j.com/docs/cypher-manual/current/access-control/manage-users/)



####  3. Copy the .env and add your values to variables.

   `$ cp .env.example .env`

Exemplo de .env 

```javascript
 PORT=8000
 URL_DATABASE= neo4j://localhost:7687
 USERNAME_DATABASE= admin
 PASSWORD_DATABASE= example123
 DATABASE_NAME= neo4j
```



# Rodando o projeto

1. Execute o comando `yarn start` no terminal para rodar o server.
 ```shell
 $michel  `yarn start`
```

2. Para rodar os testes utilize o comando `yarn test`:

 ```shell
 $michel  `yarn test`
```

3. Para testar a API:

Para testar a api você pode usar algo como postman ou [inmsonia](https://insomnia.rest/download) para criar requests e ver o retorno da api.

Exemplo:  

<img src="https://i.ibb.co/Bfj8crN/Captura-de-Tela-2021-12-12-a-s-15-20-28.png" width="600">


## Styleguide

If you use the vscode its a good choice download the eslint and prettier extension.

## Database

A documentação do banco de dados está em: [Documentação neo4j - FeiraOnline](https://github.com/Michelalmeidasilva/api-neo4j-typescript-template/blob/feat/neo4j/doc-neo4j-pt.md)

## Processo de deploy 

Veja o documento  [Deploy](https://github.com/Michelalmeidasilva/api-neo4j-typescript-template/blob/master/deploy-instructions.md)

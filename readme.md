# Documentation for neo4j database.

## Producers 

Attributes:

- nome [string] -   a producer name 
- cnpj [string] - 

#### OPERATIONS:

**- Get a producer**

```cypher
MATCH (p:Produtor) RETURN p

//Busca por um produtor  especifico
MATCH (p:Produtor {cnpj:'00093847474'}) RETURN p

//Busca por nome de todos os produtores
MATCH (a:Produtor) WHERE a.nome === 'josé' RETURN a
```

**- Get all producers**

```cypher
MATCH (p:Produtor) RETURN p
```

**- Add a new producer**

```cypher
CREATE (NomeProdutor:Produtor {nome:'',cnpj: })
                                
```

- **Delete a producer**

```cypher
MATCH (a:Produtor {nome:''}) DETACH DELETE a
```

 **- Update properties from producers:**

```cypher

// nome
MATCH (p:Produtor {cnpj:''})
SET p.nome = ''

//cpf  
MATCH (p:Produtor {cnpj:''})
SET p.cnpj = ''

```

**- Relationships:**

```cypher
//relação de produtor e produto
MATCH (Laura:Produtor {nome:'Laura'}),
    (Mel:Produto {produto:'Mel'}),
    (Laranja:Produto {produto:'Laranja'})
```

---

## Products

Attributes:

- Produto [string] -   
- unidades [number] -  
- peso [number] - 
- valor_peso [number] - 
- litros [ number ] 

#### OPERATIONS:

**- Get a product**

```cypher
//Busca um produto pelo nome dele.
MATCH (a:Produto {produto:'Queijo 1'}) return a; 

//Busca por valor_peso de todos os produtos
MATCH (a:Produto) WHERE a.valor_peso > 15 AND a.valor_peso < 35 RETURN a

//Busca por valor_peso por produto especifico
MATCH (a:Produto {produto:'Queijo 1'}) WHERE a.valor_peso > 15 AND a.valor_peso < 35 RETURN a

//Busca por valor_litro de todos os produtos
MATCH (a:Produto) WHERE a.valor_litro > 2 AND a.valor_litro < 5 RETURN a

//Busca o produto e seu vendedor
MATCH (a:Produto {produto:''})-[:VENDIDO_POR]->(m:Produtor) RETURN a,m


```

**- Get all products**

```cypher
MATCH (p:Produto) RETURN p
```

**- Get a product sold by a producer**  

```cypher
MATCH (a:Produto {produto:''})-[:VENDIDO_POR]->(m:Produtor) RETURN a,m
```

**- Add a new product** 

```cypher
CREATE (Queijo:Produto {produto:'Queijo 1', unidades: , peso:'', valor_peso: })
```

**- Delete a product**

```cypher
MATCH (a:Produto {produto:'Queijo'}) DETACH DELETE a
```

**- Update properties**

```cypher
MATCH (p:Produto {produto:''})
SET p.valor_peso = // update attribute valor_peso

MATCH (p:Produto {produto:''})
SET p.valor_litro = // update attribute valor_litro

MATCH (p:Produto {produto:''})
SET p.unidades = // update attribute unidades

MATCH (p:Produto {produto:''})
SET p.peso = // update peso

MATCH (p:Produto {produto:''})
SET p.litros = //update attribute litro
                   
```

**- Relationships:**

```cypher
//Busca por relacionamento entre o produto e seu vendedor
MATCH (a:Produto {produto:''})-[:VENDIDO_POR]->(m:Produtor) RETURN a,m
```

---

## Stock

Attributes:

- tipo [string] -   

#### OPERATIONS:

**- Get a stock**

```cypher
//Busca por uma prateleira especifica
MATCH (a:Prateleira {tipo:'Prateleira Queijo'}) RETURN a
```

**- Get all stocks**

```cypher
MATCH (a:Prateleira) RETURN a
```

**- Create a new stock**

```cypher 
CREATE (PrateleiraQueijo:Prateleira {tipo:'Prateleira Queijo'})
```

**- Delete a stock**

```cypher 
MATCH (a:Prateleira {tipo:'Prateleira Queijo'}) DETACH DELETE a
```

**- Update a stock**

```cypher
MATCH (a:Prateleira {tipo:''})
SET a.tipo = ""// update attribute valor_peso

```

**- Relationships:** 

```cypher
// 
MATCH (PrateleiraQueijo:Prateleira {tipo:'Prateleira Queijo'}),
    (Luan:Produtor {nome:'Luan'}),
    (QueijoParmesao:Produto {produto: 'Queijo 4'})
                              
//Busca itens de uma prateleira especifica
MATCH (a:Prateleira {tipo:'Prateleira Queijo'})-[:CONTEM]->(p:Produto) RETURN a,p
                              
```



---

## Clients

Attributes:

- nome [string] -   
- email [string] -  
- cpf [string|number] - 

#### OPERATIONS:

**- Get All clients**

```cypher
MATCH (p:Cliente) RETURN p
```

**- Delete a client**

```cypher
MATCH (a:Cliente {cpf:'00009999900'}) DETACH DELETE a
```

**- Create a client**

```cypher
CREATE (Teste:Cliente {nome:'Cliente', email:"@gmail.com", cpf:555452658})
```

**- Update a client**:

```cypher
//Atualiza dados pra CLIENTE

MATCH (p:Cliente {cpf:''})
SET p.nome = ''

MATCH (p:Cliente {cpf:''})
SET p.email = ''
```

**- Relationships**:

```cypher
//**Clientes compram produtos**   
MATCH (Teste:Cliente {nome:"Cliente"}),
    (Teste1:Cliente {nome:"Cliente 1"}),
    (QueijoParmesao:Produto {produto: 'Queijo 4'}),
    (Mel:Produto {produto:"Mel"})

```

---

## Orders 

attributes:

#### OPERATIONS:


**Relationships:** 




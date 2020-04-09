const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /** 
  * Métodos HTTP:
  * 
  * GET: Buscar/listar informações do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação). EX: ?page=2&users=Mayara&idade=24
   * Route Params: Parâmetros usados para identificar recursos. Usa-se ":id" para buscar o usuário específico
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * Banco de Dados:
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where() (javascript)
     */

    app.listen(3333);


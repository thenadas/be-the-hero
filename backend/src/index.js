const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/* Métodos HTTP:

    GET: Buscar/Listar uma informação do back-end
    POST: Criar uma infomação no back-end
    PUT: Alterar uma informação do back-end
    DELETE: deletar alguma informação do back-end
*/


/* 
    TIPOS de PARAMETROS

    Query params: Parametros nomeados enviados na rota, após o "?" 
    (filtros, paginação)

    Route params: Parametros utilizados para identificar recursos

    Request body: Corpo da requisição, utilizado para criar ou alterar recursos
*/




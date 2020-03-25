const express = require ('express');

const OngController = require('./controllers/OngControllers');
const incidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); //Listar as ONGS
routes.post('/ongs', OngController.create); //Criar as ONGS

routes.get('/profile', ProfileController.index); //Listar casos de ONGs especificas

routes.get('/incidents', incidentsController.index); //Listar os Casos
routes.post('/incidents', incidentsController.create); // Criar os Casos
routes.delete('/incidents/:id', incidentsController.delete) // Deletar Casos

module.exports = routes;
const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const Clients = require('../../../controllers/clientControllers/controllers');

router.get('/clients', Clients.clientList); //get clients
router.post('/clients', Clients.addClient); //add client
router.put('/clients/:id', Clients.editClient); //update client
router.delete('/clients/:id', Clients.deleteClient); //delete client
router.post('/clients/find', Clients.findClients); //find clients

module.exports = router;

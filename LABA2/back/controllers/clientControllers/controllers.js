const Client = require('../../models/clientModel/clientModel');

class Clients {
    static async clientList(req, res) {
        try {
            let clients = await Client.getClients();
            res.status(200).json(clients);
        } catch (e) {
            res.status(500).json({ err: 'Server error' });
        }
    }

    static async addClient(req, res) {
        const client = new Client(
            req.body.clientid,
            req.body.login,
            req.body.password
        );

        if (await client.addClient()) {
            res.status(201).json({ message: 'Client was added' });
        } else {
            res.status(403).json({ err: 'Already exist' });
        }
    }

    static async editClient(req, res) {
        const { id } = req.params;
        const client = new Client(
            req.body.passportID,
            req.body.login,
            req.body.password
        );

        if (await client.editClient(id)) {
            res.status(201).json({ message: 'Data was updated' });
        } else {
            res.status(403).json({ err: 'Already exist' });
        }
    }

    static async deleteClient(req, res) {
        const { id } = req.params;
        if (await Client.deleteClient(id)) {
            res.status(201).json({ message: 'Client was deleted' });
        } else {
            res.status(403).json({ err: 'Error' });
        }
    }

    static async findClients(req, res) {
        try {
            const { login, password } = req.body;
            const clients = await Client.findClients(login, password);
            res.status(200).json(clients);
        } catch (error) {
            res.status(500).json({ err: 'Server error' });
        }
    }
}

module.exports = Clients;

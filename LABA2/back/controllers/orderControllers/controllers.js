const Order = require('../../models/orderModel/orderModel');

class Orders {
    static async ordersList(req, res) {
        try {
            let orders = await Order.getOrders();
            res.status(200).json(orders);
        } catch (e) {
            res.status(500).json({ err: 'Server error' });
        }
    }

    static async addOrder(req, res) {
        const order = new Order(req.body.clientid);

        if (await order.addOrder()) {
            res.status(201).json({ message: 'Order was added' });
        } else {
            res.status(403).json({ err: 'Already exist' });
        }
    }

    static async deleteOrder(req, res) {
        const { id } = req.params;
        if (await Order.deleteOrder(id)) {
            res.status(201).json({ message: 'Order was deleted' });
        } else {
            res.status(403).json({ err: 'Error' });
        }
    }

    static async findClientOrders(req, res) {
        try {
            const { clientid } = req.body;
            const orders = await Order.findClientOrders(clientid);
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ err: 'Server error' });
        }
    }
}

module.exports = Orders;

const OrderProduct = require('../../models/ordersProductsModel/ordersProductsModel');

class OrdersProducts {
    static async ordersProductsList(req, res) {
        try {
            let ordersProducts = await OrderProduct.getOrdersProducts();
            res.status(200).json(ordersProducts);
        } catch (e) {
            res.status(500).json({ err: 'Server error' });
        }
    }

    static async addOrderProduct(req, res) {
        const orderProduct = new OrderProduct(
            req.body.orderid,
            req.body.productid,
            req.body.count
        );

        if (await orderProduct.addOrderProduct()) {
            res.status(201).json({ message: 'Order and product was added' });
        } else {
            res.status(403).json({ err: 'Already exist' });
        }
    }

    static async deleteOrderProduct(req, res) {
        const { id } = req.params;
        if (await OrderProduct.deleteOrderProduct(id)) {
            res.status(201).json({ message: 'Order and product was deleted' });
        } else {
            res.status(403).json({ err: 'Error' });
        }
    }

    static async findOrdersProducts(req, res) {
        try {
            const { orderid, productid } = req.body;
            const ordersProducts = await OrderProduct.findOrdersProducts(
                orderid,
                productid
            );
            res.status(200).json(ordersProducts);
        } catch (error) {
            res.status(500).json({ err: 'Server error' });
        }
    }
}

module.exports = OrdersProducts;

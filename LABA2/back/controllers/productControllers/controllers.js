const Product = require('../../models/productsModel/productModel');

class Products {
    static async productsList(req, res) {
        try {
            let products = await Product.getProducts();
            res.status(200).json(products);
        } catch (e) {
            res.status(500).json({ err: 'Server error' });
        }
    }

    static async addProduct(req, res) {
        const product = new Product(req.body.name, req.body.price);

        if (await product.addProduct()) {
            res.status(201).json({ message: 'Product was added' });
        } else {
            res.status(403).json({ err: 'Already exist' });
        }
    }

    static async editProduct(req, res) {
        const { id } = req.params;
        const product = new Product(req.body.name, req.body.price);

        if (await product.editProduct(id)) {
            res.status(201).json({ message: 'Data was updated' });
        } else {
            res.status(403).json({ err: 'Already exist' });
        }
    }

    static async deleteProduct(req, res) {
        const { id } = req.params;
        if (await Product.deleteProduct(id)) {
            res.status(201).json({ message: 'Product was deleted' });
        } else {
            res.status(403).json({ err: 'Error' });
        }
    }

    static async findProducts(req, res) {
        try {
            const { name, price } = req.body;
            const products = await Product.findProduct(name, price);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ err: 'Server error' });
        }
    }
}

module.exports = Products;

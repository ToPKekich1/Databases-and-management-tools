import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import EditProduct from './EditProduct';

const ListProduct = ({ name, price, isSearch }) => {
    const [products, setProducts] = useState([]);

    const deleteProduct = async id => {
        try {
            await fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            });

            setProducts(products.filter(product => product.productid !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    const getProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/products');
            const jsonData = await response.json();

            if (!jsonData) {
                setProducts([]);
            } else {
                setProducts(jsonData);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const findProducts = async () => {
        try {
            const body = { name, price };
            const res = await fetch('http://localhost:5000/products/find', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const jsonData = await res.json();
            if (!jsonData) {
                setProducts([]);
            } else {
                setProducts(jsonData);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!isSearch) {
            getProducts();
        } else {
            findProducts();
        }
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">ProductId</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.productid}>
                            <td>{product.productid}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <EditProduct product={product} />
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        deleteProduct(product.productid)
                                    }>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default ListProduct;

import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ListOrdersProducts = ({ orderid, productid, isSearch }) => {
    const [ordersProducts, setOrdersProducts] = useState([]);

    //delete todo function

    const deleteOrdersProducts = async id => {
        try {
            await fetch(`http://localhost:5000/ordersProducts/${id}`, {
                method: 'DELETE'
            });

            setOrdersProducts(
                ordersProducts.filter(
                    ordersProduct => ordersProduct.orderid !== id
                )
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    const getOrdersProducts = async () => {
        try {
            const response = await fetch(
                'http://localhost:5000/ordersProducts'
            );
            const jsonData = await response.json();
            if (!jsonData) {
                setOrdersProducts([]);
            } else {
                setOrdersProducts(jsonData);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const findordersProducts = async () => {
        try {
            const body = { orderid, productid };
            const res = await fetch(
                'http://localhost:5000/ordersProducts/find',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }
            );
            const jsonData = await res.json();
            if (!jsonData) {
                setOrdersProducts([]);
            } else {
                setOrdersProducts(jsonData);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!isSearch) {
            getOrdersProducts();
        } else {
            findordersProducts();
        }
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">orderid</th>
                        <th scope="col">ProductId</th>
                        <th scope="col">Count</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {ordersProducts.map(ordersProduct => (
                        <tr key={ordersProduct.orderid}>
                            <td>{ordersProduct.orderid}</td>
                            <td>{ordersProduct.productid}</td>
                            <td>{ordersProduct.count}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        deleteOrdersProducts(
                                            ordersProduct.orderid
                                        )
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

export default ListOrdersProducts;

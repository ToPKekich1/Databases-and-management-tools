import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ListOrder = ({ clientid, isSearch }) => {
    const [orders, setOrders] = useState([]);

    //delete todo function

    const deleteOrder = async id => {
        try {
            await fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            });

            setOrders(orders.filter(order => order.orderid !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    const getOrders = async () => {
        try {
            const response = await fetch('http://localhost:5000/orders');
            const jsonData = await response.json();

            setOrders(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    const findOrders = async () => {
        try {
            const body = { clientid };
            const res = await fetch('http://localhost:5000/orders/find', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const jsonData = await res.json();
            if (!jsonData) {
                setOrders([]);
            } else {
                setOrders(jsonData);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!isSearch) {
            getOrders();
        } else {
            findOrders();
        }
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">OrderId</th>
                        <th scope="col">ClientId</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.orderid}>
                            <td>{order.orderid}</td>

                            <td>{order.clientid}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => deleteOrder(order.orderid)}>
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

export default ListOrder;

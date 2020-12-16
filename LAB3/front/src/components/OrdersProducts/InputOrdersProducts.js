import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import classes from './InputOrdersProducts.module.css';

const InputOrdersProducts = () => {
    const [orderid, setOrderId] = useState('');
    const [productid, setProductId] = useState('');
    const [count, setCount] = useState('');

    const onSubmitForm = async event => {
        event.preventDefault();

        try {
            const body = { orderid, productid, count };
            const res = await fetch('http://localhost:5000/ordersProducts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            if (res.status === 403) {
                alert('Error');
            } else {
                window.location = '/';
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Card border="dark" bg="light" className={classes.Card}>
            <h1>Add new order-product here</h1>
            <Form border="primary" onSubmit={onSubmitForm}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridorderid">
                        <Form.Label>OrderId</Form.Label>
                        <Form.Control
                            maxLength="15"
                            type="text"
                            placeholder="orderid"
                            value={orderid}
                            onChange={event => setOrderId(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridproductid">
                        <Form.Label>ProductId</Form.Label>
                        <Form.Control
                            maxLength="20"
                            type="text"
                            placeholder="productid"
                            value={productid}
                            onChange={event => setProductId(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridcount">
                        <Form.Label>Count</Form.Label>
                        <Form.Control
                            maxLength="8"
                            type="text"
                            placeholder="count"
                            value={count}
                            onChange={event => setCount(event.target.value)}
                            required
                        />
                    </Form.Group>
                </Form.Row>

                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    );
};

export default InputOrdersProducts;

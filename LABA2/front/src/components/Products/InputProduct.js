import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import classes from './InputProduct.module.css';

const InputProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const onSubmitForm = async event => {
        event.preventDefault();

        try {
            const body = { name, price };
            const res = await fetch('http://localhost:5000/products', {
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
            <h1>Add new product here</h1>
            <Form border="primary" onSubmit={onSubmitForm}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            maxLength="30"
                            type="text"
                            placeholder="name"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSurname">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            maxLength="35"
                            type="text"
                            placeholder="price"
                            value={price}
                            onChange={event => setPrice(event.target.value)}
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

export default InputProduct;

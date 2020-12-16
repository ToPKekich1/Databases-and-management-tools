import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import classes from './InputReviews.module.css';

const InputReviews = () => {
    const [text, setText] = useState('');
    const [client_name, setClientName] = useState('');
    const [productid, setProductId] = useState('');

    const onSubmitForm = async event => {
        event.preventDefault();

        try {
            const body = { text, client_name, productid };
            const res = await fetch('http://localhost:5000/reviews', {
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
            <h1>Add new review here</h1>
            <Form border="primary" onSubmit={onSubmitForm}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Text</Form.Label>
                        <Form.Control
                            maxLength="100"
                            type="text"
                            placeholder="text"
                            value={text}
                            onChange={event => setText(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridclient_name">
                        <Form.Label>Client name</Form.Label>
                        <Form.Control
                            maxLength="30"
                            type="text"
                            placeholder="Client name"
                            value={client_name}
                            onChange={event =>
                                setClientName(event.target.value)
                            }
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridproductid">
                        <Form.Label>Productid</Form.Label>
                        <Form.Control
                            maxLength="8"
                            type="text"
                            placeholder="productid"
                            value={productid}
                            onChange={event => setProductId(event.target.value)}
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

export default InputReviews;

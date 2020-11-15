import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import classes from './inputOrder.module.css';

const InputOrder = () => {
    const [clientid, setClientId] = useState('');

    const onSubmitForm = async event => {
        event.preventDefault();

        try {
            const body = { clientid };
            const res = await fetch('http://localhost:5000/orders', {
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
            <h1>Add new order here</h1>
            <Form border="primary" onSubmit={onSubmitForm}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>ClientId</Form.Label>
                        <Form.Control
                            maxLength="5"
                            type="text"
                            placeholder="clientid"
                            value={clientid}
                            onChange={event => setClientId(event.target.value)}
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

export default InputOrder;

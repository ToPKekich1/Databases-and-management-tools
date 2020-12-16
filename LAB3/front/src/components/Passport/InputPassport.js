import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import classes from './InputPassport.module.css';

const InputPassport = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');

    const onSubmitForm = async event => {
        event.preventDefault();

        try {
            const body = { name, surname, number };
            const res = await fetch('http://localhost:5000/passports', {
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
            <h1>Add new passport here</h1>
            <Form border="primary" onSubmit={onSubmitForm}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            maxLength="15"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSurname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            maxLength="20"
                            type="text"
                            placeholder="Surname"
                            value={surname}
                            onChange={event => setSurname(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Number</Form.Label>
                        <Form.Control
                            maxLength="8"
                            type="text"
                            placeholder="Number"
                            value={number}
                            onChange={event => setNumber(event.target.value)}
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

export default InputPassport;

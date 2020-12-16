import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListPassport from './ListPassport';

import classes from './InputPassport.module.css';

const SearchPassports = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');
    const [search, isSearch] = useState(false);

    const onFind = () => isSearch(true);
    const offFind = () => isSearch(false);

    return (
        <>
            <Card border="dark" bg="light" className={classes.Card}>
                <h1>Find passports</h1>
                <Form border="primary">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                maxLength="15"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSurname">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control
                                maxLength="20"
                                type="text"
                                placeholder="Surname"
                                value={surname}
                                onChange={event =>
                                    setSurname(event.target.value)
                                }
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNumber">
                            <Form.Label>Number</Form.Label>
                            <Form.Control
                                maxLength="8"
                                type="text"
                                placeholder="Number"
                                value={number}
                                onChange={event =>
                                    setNumber(event.target.value)
                                }
                            />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="warning" onClick={onFind}>
                        Find
                    </Button>
                    <Button variant="danger" onClick={offFind}>
                        Reset
                    </Button>
                </Form>
            </Card>
            {search ? (
                <ListPassport
                    name={name || ''}
                    surname={surname || ''}
                    number={number || ''}
                    isSearch={true}
                />
            ) : null}
        </>
    );
};

export default SearchPassports;

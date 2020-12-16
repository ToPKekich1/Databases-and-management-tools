import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListClient from './ListClient';
import classes from './inputClient.module.css';

const SearchClient = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [search, isSearch] = useState(false);

    const onFind = () => isSearch(true);
    const offFind = () => isSearch(false);

    return (
        <>
            <Card border="dark" bg="light" className={classes.Card}>
                <h1>Find clients</h1>
                <Form border="primary">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridSurname">
                            <Form.Label>Login</Form.Label>
                            <Form.Control
                                maxLength="35"
                                type="text"
                                placeholder="Login"
                                value={login}
                                onChange={event => setLogin(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNumber">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                maxLength="35"
                                type="text"
                                placeholder="Password"
                                value={password}
                                onChange={event =>
                                    setPassword(event.target.value)
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
                <ListClient
                    clientid={''}
                    login={login}
                    password={password}
                    isSearch={true}
                />
            ) : null}
        </>
    );
};

export default SearchClient;

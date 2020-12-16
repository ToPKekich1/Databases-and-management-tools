import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './InputProduct.module.css';
import ListProduct from './ListProduct';

const SearchProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [search, isSearch] = useState(false);

    const onFind = () => isSearch(true);
    const offFind = () => isSearch(false);
    return (
        <>
            <Card border="dark" bg="light" className={classes.Card}>
                <h1>Find products</h1>
                <Form border="primary">
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
                    <Button variant="warning" onClick={onFind}>
                        Find
                    </Button>
                    <Button variant="danger" onClick={offFind}>
                        Reset
                    </Button>
                </Form>
            </Card>
            {search ? (
                <ListProduct name={name} price={price} isSearch={true} />
            ) : null}
        </>
    );
};

export default SearchProduct;

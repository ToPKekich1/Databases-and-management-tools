import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListOrdersProducts from './ListOrdersProducts';

import classes from './InputOrdersProducts.module.css';

const SearchOrdersProducts = () => {
    const [orderid, setOrderId] = useState('');
    const [productid, setProductId] = useState('');
    const [search, isSearch] = useState(false);
    const onFind = () => isSearch(true);
    const offFind = () => isSearch(false);
    return (
        <>
            <Card border="dark" bg="light" className={classes.Card}>
                <h1>Find order-products</h1>
                <Form border="primary">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridorderid">
                            <Form.Label>OrderId</Form.Label>
                            <Form.Control
                                maxLength="15"
                                type="text"
                                placeholder="orderid"
                                value={orderid}
                                onChange={event =>
                                    setOrderId(event.target.value)
                                }
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
                                onChange={event =>
                                    setProductId(event.target.value)
                                }
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
                <ListOrdersProducts
                    orderid={orderid || ''}
                    productid={productid || ''}
                    isSearch={true}
                />
            ) : null}
        </>
    );
};

export default SearchOrdersProducts;

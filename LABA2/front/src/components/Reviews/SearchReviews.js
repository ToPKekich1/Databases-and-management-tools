import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './InputReviews.module.css';
import ListReviews from './ListReviews';

const SearchReviews = () => {
    const [productid, setProductId] = useState('');
    const [search, isSearch] = useState(false);

    const onFind = () => isSearch(true);
    const offFind = () => isSearch(false);

    return (
        <>
            <Card border="dark" bg="light" className={classes.Card}>
                <h1>Find reviews</h1>
                <Form border="primary">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridproductid">
                            <Form.Label>Productid</Form.Label>
                            <Form.Control
                                maxLength="8"
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
                <ListReviews productid={productid || ''} isSearch={true} />
            ) : null}
        </>
    );
};

export default SearchReviews;

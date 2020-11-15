import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListOrder from './ListOrder';
import classes from './inputOrder.module.css';

const SearchOrder = () => {
    const [clientid, setClientId] = useState('');
    const [search, isSearch] = useState(false);

    const onFind = () => isSearch(true);
    const offFind = () => isSearch(false);

    return (
        <>
            <Card border="dark" bg="light" className={classes.Card}>
                <h1>Find orders</h1>
                <Form border="primary">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridSurname">
                            <Form.Label>ClientId</Form.Label>
                            <Form.Control
                                maxLength="5"
                                type="text"
                                placeholder="clientid"
                                value={clientid}
                                onChange={event =>
                                    setClientId(event.target.value)
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
            {search ? <ListOrder clientid={clientid} isSearch={true} /> : null}
        </>
    );
};

export default SearchOrder;

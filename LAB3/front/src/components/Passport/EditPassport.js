import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const EditPassport = ({ passport }) => {
    const [name, setName] = useState(passport.name);
    const [surname, setSurname] = useState(passport.surname);
    const [number, setNumber] = useState(passport.number);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //edit passport function

    const updatePassport = async event => {
        event.preventDefault();
        try {
            const body = { name, surname, number };
            const response = await fetch(
                `http://localhost:5000/passports/${passport.passport_id}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }
            );

            if (response.status === 403) {
                alert('Error');
            } else {
                window.location = '/';
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                onChange={event =>
                                    setSurname(event.target.value)
                                }
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
                                onChange={event =>
                                    setNumber(event.target.value)
                                }
                                required
                            />
                        </Form.Group>
                    </Form.Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={event => updatePassport(event)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditPassport;

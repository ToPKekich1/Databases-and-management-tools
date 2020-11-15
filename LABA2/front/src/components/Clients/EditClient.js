import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const EditClient = ({ client }) => {
    const clientid = client.clientid;
    const [login, setLogin] = useState(client.login);
    const [password, setPassword] = useState(client.password);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //edit client function

    const updateClient = async event => {
        event.preventDefault();
        try {
            const body = { clientid, login, password };
            console.log(JSON.stringify(body));

            const response = await fetch(
                `http://localhost:5000/clients/${clientid}`,
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
                        <Form.Group as={Col} controlId="formGridSurname">
                            <Form.Label>Login</Form.Label>
                            <Form.Control
                                maxLength="35"
                                type="text"
                                placeholder="Login"
                                value={login}
                                onChange={event => setLogin(event.target.value)}
                                required
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
                        onClick={event => updateClient(event)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditClient;

import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import EditClient from './EditClient';

const ListClient = ({ clientid, login, password, isSearch }) => {
    const [clients, setClients] = useState([]);

    //delete todo function

    const deleteClient = async id => {
        try {
            await fetch(`http://localhost:5000/clients/${id}`, {
                method: 'DELETE'
            });

            setClients(clients.filter(client => client.clientid !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    const getClients = async () => {
        try {
            const response = await fetch('http://localhost:5000/clients');
            const jsonData = await response.json();

            if (!jsonData) {
                setClients([]);
            } else {
                setClients(jsonData);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const findClients = async () => {
        try {
            const body = { login, password };
            const res = await fetch('http://localhost:5000/clients/find', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const jsonData = await res.json();
            if (!jsonData) {
                setClients([]);
            } else {
                setClients(jsonData);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!isSearch) {
            getClients();
        } else {
            findClients();
        }
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">Clientid</th>
                        <th scope="col">Login</th>
                        <th scope="col">Password</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client.clientid}>
                            <td>{client.clientid}</td>
                            <td>{client.login}</td>
                            <td>{client.password}</td>
                            <td>
                                <EditClient client={client} />
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        deleteClient(client.clientid)
                                    }>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default ListClient;

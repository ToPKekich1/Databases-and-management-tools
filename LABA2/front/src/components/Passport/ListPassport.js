import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import EditPassport from './EditPassport';

const ListPassport = ({ name, surname, number, isSearch }) => {
    const [passports, setPassports] = useState([]);

    //delete todo function

    const deletePassport = async id => {
        try {
            await fetch(`http://localhost:5000/passports/${id}`, {
                method: 'DELETE'
            });

            setPassports(
                passports.filter(passport => passport.passport_id !== id)
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    const getPassports = async () => {
        try {
            const response = await fetch('http://localhost:5000/passports');
            const jsonData = await response.json();
            if (!jsonData) {
                setPassports([]);
            } else {
                setPassports(jsonData);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const findPassports = async () => {
        try {
            const body = { name, surname, number };
            const res = await fetch('http://localhost:5000/passports/find', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const jsonData = await res.json();
            if (!jsonData) {
                setPassports([]);
            } else {
                setPassports(jsonData);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!isSearch) {
            getPassports();
        } else {
            findPassports();
        }
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">PassportId</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Number</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {passports.map(passport => (
                        <tr key={passport.passport_id}>
                            <td>{passport.passport_id}</td>
                            <td>{passport.name}</td>
                            <td>{passport.surname}</td>
                            <td>{passport.number}</td>
                            <td>
                                <EditPassport passport={passport} />
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        deletePassport(passport.passport_id)
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

export default ListPassport;

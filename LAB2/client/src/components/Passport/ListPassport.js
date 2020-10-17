import React, { Fragment, useEffect, useState } from 'react';

import EditPassport from './EditPassport';

const ListPassport = () => {
    const [passports, setPassports] = useState([]);

    //delete todo function

    const deletePassport = async id => {
        try {
            await fetch(`http://localhost:5000/passport/${id}`, {
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
            const response = await fetch('http://localhost:5000/passport');
            const jsonData = await response.json();

            setPassports(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getPassports();
    }, []);

    return (
        <Fragment>
            <table className="table table-striped table-bordered mt-3 ">
                <thead>
                    <tr>
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
                            <td>{passport.name}</td>
                            <td>{passport.surname}</td>
                            <td>{passport.number}</td>
                            <td>
                                <EditPassport passport={passport} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger "
                                    onClick={() =>
                                        deletePassport(passport.passport_id)
                                    }>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>
                                {' '}
                                <EditTodo todo={todo} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.todo_id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </Fragment>
    );
};

export default ListPassport;

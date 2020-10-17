import React, { Fragment, useState } from 'react';

const InputPassport = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');

    const onSubmitForm = async event => {
        event.preventDefault();

        try {
            const body = { name, surname, number };
            await fetch('http://localhost:5000/passport', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            window.location = '/passport';
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Fragment>
            <form className="mt-3" onSubmit={onSubmitForm}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div className="col">
                        <label htmlFor="surname">Surname:</label>
                    </div>
                    <div className="col">
                        <label htmlFor="number">Number:</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            required
                            maxLength="15"
                        />
                    </div>
                    <div className="col">
                        <input
                            id="surname"
                            type="text"
                            className="form-control"
                            placeholder="Surname"
                            value={surname}
                            onChange={event => setSurname(event.target.value)}
                            required
                            maxLength="20"
                        />
                    </div>
                    <div className="col">
                        <input
                            id="number"
                            type="text"
                            className="form-control"
                            placeholder="number"
                            value={number}
                            onChange={event => setNumber(event.target.value)}
                            required
                            maxLength="13"
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <button className="btn btn-success px-5">Add</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary px-5">
                            Add random
                        </button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default InputPassport;

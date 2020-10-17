import React, { Fragment, useState } from 'react';

const EditPassport = ({ passport }) => {
    const [name, setName] = useState(passport.name);
    const [surname, setSurname] = useState(passport.surname);
    const [number, setNumber] = useState(passport.number);

    //edit passport function

    const updatePassport = async event => {
        event.preventDefault();
        try {
            const body = { name, surname, number };
            const response = await fetch(
                `http://localhost:5000/passport/${passport.passport_id}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }
            );

            if (response.status === 400) {
                setNumber(passport.number);
            }
            // window.location = '/passport';
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${passport.passport_id}`}>
                Edit
            </button>

            <div
                className="modal fade"
                id={`id${passport.passport_id}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit Passport
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => {
                                    setName(passport.name);
                                    setSurname(passport.surname);
                                    setNumber(passport.number);
                                }}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body ">
                            <input
                                type="text"
                                className="form-control mt-2"
                                value={name}
                                onChange={event => setName(event.target.value)}
                                maxLength="15"
                                required
                            />
                            <input
                                type="text"
                                className="form-control mt-2 "
                                value={surname}
                                onChange={event =>
                                    setSurname(event.target.value)
                                }
                                maxLength="20"
                                required
                            />
                            <input
                                type="text"
                                className="form-control mt-2"
                                value={number}
                                onChange={event =>
                                    setNumber(event.target.value)
                                }
                                maxLength="13"
                                required
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => {
                                    setName(passport.name);
                                    setSurname(passport.surname);
                                    setNumber(passport.number);
                                }}>
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={event => updatePassport(event)}>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditPassport;

// import React, { Fragment, useState } from 'react';

// const EditPassport = ({ passport }) => {
//     // const [newPassport, setPassport] = useState({
//     //     name: passport.name,
//     //     surname: passport.surname,
//     //     number: passport.number
//     // });

//     const [passportName, setPassportName] = useState(passport.name);
//     const [passportSurname, setPassportSurname] = useState(passport.surname);
//     const [passportNumber, setPassportNumber] = useState(passport.number);

//     //edit passport function

//     const updatePassport = async event => {
//         event.preventDefault();
//         try {
//             const body = { passportName, passportSurname, passportNumber };
//             await fetch(
//                 `http://localhost:5000/passport/${passport.passport_id}`,
//                 {
//                     method: 'PUT',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify(body)
//                 }
//             );

//             // window.location = '/passport';
//         } catch (error) {
//             console.error(error.message);
//         }
//     };

//     return (
//         <Fragment>
//             <button
//                 type="button"
//                 className="btn btn-warning"
//                 data-toggle="modal"
//                 data-target={`#id${passport.passport_id}`}>
//                 Edit
//             </button>

//             <div
//                 onClick={() => {
//                     setPassportName(passport.name);
//                     setPassportSurname(passport.surname);
//                     setPassportNumber(passport.number);
//                 }}
//                 className="modal fade"
//                 id={`id${passport.passport_id}`}
//                 tabIndex="-1"
//                 aria-labelledby="exampleModalLabel"
//                 aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">
//                                 Edit Passport
//                             </h5>
//                             <button
//                                 type="button"
//                                 className="close"
//                                 data-dismiss="modal"
//                                 aria-label="Close"
//                                 onClick={() => {
//                                     setPassportName(passport.name);
//                                     setPassportSurname(passport.surname);
//                                     setPassportNumber(passport.number);
//                                 }}>
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 value={passportName}
//                                 onChange={event =>
//                                     setPassportName(event.target.value)
//                                 }
//                             />
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 value={passportSurname}
//                                 onChange={event =>
//                                     setPassportSurname(event.target.value)
//                                 }
//                             />
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 value={passportNumber}
//                                 onChange={event =>
//                                     setPassportNumber(event.target.value)
//                                 }
//                             />
//                         </div>
//                         <div className="modal-footer">
//                             <button
//                                 type="button"
//                                 className="btn btn-danger"
//                                 data-dismiss="modal"
//                                 onClick={() => {
//                                     setPassportName(passport.name);
//                                     setPassportSurname(passport.surname);
//                                     setPassportNumber(passport.number);
//                                 }}>
//                                 Close
//                             </button>
//                             <button
//                                 type="button"
//                                 className="btn btn-warning"
//                                 onClick={event => updatePassport(event)}>
//                                 Edit
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
//     );
// };

// export default EditPassport;

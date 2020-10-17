import React, { Component, Fragment } from 'react';
import InputPassport from '../components/Passport/InputPassport';
import ListPassport from '../components/Passport/ListPassport'

class Passport extends Component {
    render() {
        return (
            <Fragment>
                <InputPassport />
                <ListPassport/>
            </Fragment>
        );
    }
}

export default Passport;

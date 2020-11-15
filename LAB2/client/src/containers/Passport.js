import React, { Component } from 'react';
import InputPassport from '../components/Passport/InputPassport';
import ListPassport from '../components/Passport/ListPassport';

class Passport extends Component {
    render() {
        return (
            <>
                <InputPassport />
                <ListPassport />
            </>
        );
    }
}

export default Passport;

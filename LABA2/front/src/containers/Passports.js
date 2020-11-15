import React, { Component } from 'react';
import InputPassport from '../components/Passport/InputPassport';
import ListPassport from '../components/Passport/ListPassport';
import SearchPassports from '../components/Passport/SearchPassports';
import Button from 'react-bootstrap/Button';

class Passport extends Component {
    constructor(props) {
        super(props);
        this.state = { isSearch: false };
    }

    addComponent = () => (
        <>
            <InputPassport />
            <ListPassport name="" surname="" number="" isSearch={false} />
        </>
    );
    search() {
        this.setState({
            isSearch: true
        });
    }

    add() {
        this.setState({
            isSearch: false
        });
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={() => this.add()}>
                    Add
                </Button>
                <Button variant="primary" onClick={() => this.search()}>
                    Search
                </Button>
                {!this.state.isSearch ? (
                    this.addComponent()
                ) : (
                    <SearchPassports />
                )}
            </>
        );
    }
}

export default Passport;

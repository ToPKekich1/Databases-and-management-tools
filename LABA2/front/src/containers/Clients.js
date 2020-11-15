import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputClient from '../components/Clients/InputClient';
import ListClient from '../components/Clients/ListClient';
import SearchClient from '../components/Clients/SearchClient';

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = { isSearch: false };
    }

    addComponent = () => (
        <>
            <InputClient />
            <ListClient clientid="" login="" password="" isSearch={false} />
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
                {!this.state.isSearch ? this.addComponent() : <SearchClient />}
            </>
        );
    }
}

export default Clients;

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputOrder from '../components/Orders/InputOrder';
import ListOrder from '../components/Orders/ListOrder';
import SearchOrder from '../components/Orders/SearchOrder';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = { isSearch: false };
    }

    addComponent = () => (
        <>
            <InputOrder />
            <ListOrder clientid="" isSearch={false} />
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
                {!this.state.isSearch ? this.addComponent() : <SearchOrder />}
            </>
        );
    }
}

export default Orders;

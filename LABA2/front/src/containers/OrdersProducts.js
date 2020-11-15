import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputOrdersProducts from '../components/OrdersProducts/InputOrdersProducts';
import ListOrdersProducts from '../components/OrdersProducts/ListOrdersProducts';
import SearchOrdersProducts from '../components/OrdersProducts/SearchOrdersProducts';

class OrdersProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { isSearch: false };
    }

    addComponent = () => (
        <>
            <InputOrdersProducts />
            <ListOrdersProducts orderid="" productid="" isSearch={false} />
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
                    <SearchOrdersProducts />
                )}
            </>
        );
    }
}

export default OrdersProduct;

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputProduct from '../components/Products/InputProduct';
import ListProduct from '../components/Products/ListProduct';
import SearchProduct from '../components/Products/SearchProduct';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { isSearch: false };
    }

    addComponent = () => (
        <>
            <InputProduct />
            <ListProduct name="" price="" isSearch={false} />
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
                {!this.state.isSearch ? this.addComponent() : <SearchProduct />}
            </>
        );
    }
}

export default Products;

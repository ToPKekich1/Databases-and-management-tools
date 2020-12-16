import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputReviews from '../components/Reviews/InputReviews';
import ListReviews from '../components/Reviews/ListReviews';
import SearchReviews from '../components/Reviews/SearchReviews';

class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = { isSearch: false };
    }

    addComponent = () => (
        <>
            <InputReviews />
            <ListReviews productid="" isSearch={false} />
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
                {!this.state.isSearch ? this.addComponent() : <SearchReviews />}
            </>
        );
    }
}

export default Reviews;

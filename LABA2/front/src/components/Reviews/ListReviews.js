import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ListReviews = ({ productid, isSearch }) => {
    const [reviews, setReviews] = useState([]);

    //delete todo function

    const deleteReview = async id => {
        try {
            await fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            });

            setReviews(reviews.filter(review => review.reviewid !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    const getReviews = async () => {
        try {
            const response = await fetch('http://localhost:5000/reviews');
            const jsonData = await response.json();
            if (!jsonData) {
                setReviews([]);
            } else {
                setReviews(jsonData);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const findReviews = async () => {
        try {
            const body = { productid };
            const res = await fetch('http://localhost:5000/reviews/find', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const jsonData = await res.json();
            if (!jsonData) {
                setReviews([]);
            } else {
                setReviews(jsonData);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!isSearch) {
            getReviews();
        } else {
            findReviews();
        }
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">ReviewId</th>
                        <th scope="col">Text</th>
                        <th scope="col">Client Name</th>
                        <th scope="col">ProductId</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map(review => (
                        <tr key={review.reviewid}>
                            <td>{review.reviewid}</td>
                            <td>{review.text}</td>
                            <td>{review.client_name}</td>
                            <td>{review.productid}</td>

                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        deleteReview(review.reviewid)
                                    }>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default ListReviews;

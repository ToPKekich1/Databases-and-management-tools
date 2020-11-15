const Review = require('../../models/reviewModel/reviewModel');

class Reviews {
    static async reviewsList(req, res) {
        try {
            let reviews = await Review.getReviews();
            res.status(200).json(reviews);
        } catch (e) {
            res.status(500).json({ err: 'Server error' });
        }
    }

    static async addReview(req, res) {
        const review = new Review(
            req.body.text,
            req.body.client_name,
            req.body.productid
        );

        if (await review.addReview()) {
            res.status(201).json({ message: 'Review was added' });
        } else {
            res.status(403).json({ err: 'Already exist' });
        }
    }

    static async deleteReview(req, res) {
        const { id } = req.params;
        if (await Review.deleteReview(id)) {
            res.status(201).json({ message: 'Review was deleted' });
        } else {
            res.status(403).json({ err: 'Error' });
        }
    }

    static async findReviews(req, res) {
        try {
            const { productid } = req.body;
            const reviews = await Review.findReviews(productid);
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ err: 'Server error' });
        }
    }
}

module.exports = Reviews;

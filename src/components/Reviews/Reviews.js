import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import './Reviews.css'

const Reviews = () => {

  const data = [
    {
      id: 1,
      name: 'Alvin Stanley',
      review: 'Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help.',
      see: 'SEE ALL REVIEWS →'
   
    },
    {
      id: 2,
      name: 'Alvin Stanley',
      review: 'Great company to work for! This organization cares for its team of caregivers, office employees, and clients.'
    },
    {
      id: 3,
      name: 'Alvin Stanley',
      review: 'Awesome!'
    }
  ];

  return (
    <div className="reviews">
      <Row>
        <Col md={2} md={{ offset: 1 }}>
          <h1>5.0</h1>
          <i class="fas fa-star review__icon review__icon"></i><i class="fas fa-star review__icon"></i><i class="fas fa-star review__icon"></i><i class="fas fa-star review__icon"></i><i class="fas fa-star review__icon"></i>
          <p className="reviews__verified">2,054 verified customers reviews by <strong>Google</strong>.</p>
        </Col>
        {
          data.map(review => (
            <Col md={3} key={review.id}>
              <Card body className="review__card">
                <h6>{review.name}</h6>
                <i class="fas fa-star review__icon__user"></i><i class="fas fa-star review__icon__user"></i><i class="fas fa-star review__icon__user"></i><i class="fas fa-star review__icon__user"></i><i class="fas fa-star review__icon__user"></i>
                <p className="review__user">{review.review}</p>
              </Card>
              <p className="see__more__review">{review.see}</p>
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default Reviews;
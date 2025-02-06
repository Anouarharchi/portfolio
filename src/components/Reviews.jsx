import React, { useState } from 'react';

export default function Reviews() {
  const [reviews] = useState([
    {
      name: 'Omar El Idrissi',
      rating: 5,
      comment: 'The product is really great! It exceeded my expectations.',
    },
    {
      name: 'Sara Lahlou',
      rating: 4,
      comment: 'The quality is good, but the delivery was a bit delayed.',
    },
    {
      name: 'Youssef Bouskri',
      rating: 5,
      comment: 'Excellent experience. I\'ll come back to buy from you, God willing!',
    },
  ]);

  return (
    <div className="container my-5" style={{ color: 'white' }}>
      <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', color: '#00bcd4' }}>
        Customer Reviews
      </h2>
      <div className="row">
        <div className="col-md-12">
          <h4 style={{ fontSize: '1.8rem', color: '#00bcd4' }}>
            See what our customers are saying about us
          </h4>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            We take our customers' feedback seriously. Here's what they've said about us:
          </p>
        </div>
        <div className="col-md-12">
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="mb-4"
                style={{
                  backgroundColor: '#333',
                  color: '#fff',
                  padding: '15px',
                  borderRadius: '8px',
                }}
              >
                <h5>{review.name}</h5>
                <p style={{ fontSize: '1rem', fontStyle: 'italic' }}>Rating: {review.rating} / 5</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

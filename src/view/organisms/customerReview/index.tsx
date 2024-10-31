import React, { useState, useEffect } from "react";
import {reviews} from './constants';
import VerifiedImage from '../../../assets/img/verified.png';
import GoogleImage from '../../../assets/img/google.png';
import UserImage from '../../../assets/img/user/user.png'
import "./style.css";

const ReviewCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalReviews = reviews.length;
  const visibleReviews = 3;

  // Creates a "looping" review array by adding clones at the start and end
  const extendedReviews = [
    ...reviews.slice(-visibleReviews),
    ...reviews,
    ...reviews.slice(0, visibleReviews),
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prevIndex) => prevIndex + visibleReviews);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prevIndex) => prevIndex - visibleReviews);
  };

  // Reset the index when it reaches the cloned slides
  useEffect(() => {
    if (isAnimating) {
      const transitionEndHandler = setTimeout(() => {
        setIsAnimating(false);

        // Loop back when reaching the end clones
        if (index >= totalReviews) {
          setIndex(0);
        } else if (index < 0) {
          setIndex(totalReviews - visibleReviews);
        }
      }, 500); // Match this with CSS transition duration

      return () => clearTimeout(transitionEndHandler);
    }
  }, [index, isAnimating, totalReviews]);

    // **Auto-Slide every 3 seconds**
    useEffect(() => {
        const intervalId = setInterval(handleNext, 12000); // Slide every 12 seconds

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Run only once on mount

  return (
    <section className="services-1 customer-review" id="customer-review">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-head text-center">
                        <div className="section-subtitle">Our Customer reviews</div>
                        <div className="section-title">Hear from Customers</div>
                    </div>
                </div>
            </div>
            <div className="carousel">
                <div
                    className="review-container"
                    style={{
                    transform: `translateX(-${(index + visibleReviews) * (100 / visibleReviews)}%)`,
                    transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
                    }}
                >
                    {extendedReviews.map((review, i) => (
                    <div key={i} className="review">
                        <div className="review-box">
                            <div className="review-row">
                                <div className="title-row">
                                    <img src={UserImage} alt="Verified" className="user-img"/>
                                    <span className="title">{review.author}</span>
                                </div>
                                <div style={{width: 50, textAlign: 'right'}}>
                                    <img src={GoogleImage} alt="Verified" className="google-img"/>
                                </div>
                            </div>
                            <p>{review.text}</p>
                            <div className="stars">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <img src={VerifiedImage} alt="Verified" className="verified-img"/>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <button onClick={handlePrev} className="prev-button">‹</button>
                <button onClick={handleNext} className="next-button">›</button>
            </div>
        </div>
    </section>
  );
};

export default ReviewCarousel;

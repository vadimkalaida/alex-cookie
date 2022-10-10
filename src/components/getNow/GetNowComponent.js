import React from 'react';
import starGet from '../../assets/img/star-white.svg'


const GetNowComponent = () => {
    return(
        <section className="get-now-section">
            <div className="container">
                <div className="flex-get">
                    <div>
                        <h2 className="title-get">Get Yours Now</h2>
                        <p className="text-get">FREE shipping on orders over $99</p>
                    </div>
                    <div>
                        <a href="#orderMain" className="button-get">BUILD MY CUSTOM PACK! </a>
                        <div className="flex-rated">
                            <p className="rated-get">RATED 5 STARS</p>
                            <div className="review-stars-block">
                                <span><img src={starGet} alt="" className="star-get" /></span>
                                <span><img src={starGet} alt="" className="star-get" /></span>
                                <span><img src={starGet} alt="" className="star-get" /></span>
                                <span><img src={starGet} alt="" className="star-get" /></span>
                                <span><img src={starGet} alt="" className="star-get" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default GetNowComponent;
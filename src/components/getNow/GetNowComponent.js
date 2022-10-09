import React from 'react';
import starGet from '../../assets/img/star-white.svg'


const GetNowComponent = () => {
    return(
        <section class="get-now-section">
            <div class="container">
                <div class="flex-get">
                    <div>
                        <h2 class="title-get">Get Yours Now</h2>
                        <p class="text-get">FREE shipping on orders over $99</p>
                    </div>
                    <div>
                        <a href="#orderMain" class="button-get">BUILD MY CUSTOM PACK! </a>
                        <div class="flex-rated">
                            <p class="rated-get">RATED 5 STARS</p>
                            <div class="review-stars-block">
                                <span><img src={starGet} alt="" class="star-get" /></span>
                                <span><img src={starGet} alt="" class="star-get" /></span>
                                <span><img src={starGet} alt="" class="star-get" /></span>
                                <span><img src={starGet} alt="" class="star-get" /></span>
                                <span><img src={starGet} alt="" class="star-get" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetNowComponent;
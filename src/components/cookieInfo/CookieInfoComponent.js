import React from 'react';
import checkIcon from '../../assets/img/check-icon.png'
import learn from '../../assets/img/learn.png'
import cakeGif from '../../assets/img/main-cake.gif'

const CookieInfoComponent = () => {
    return(
        <section class="cookies-info-section">
            <div class="container">
                <h2 class="title">Why You'll Love Naked Cookies</h2>
                <p class="description-title">Healthy ingredients. Great taste.</p>
                <div class="flex-check">
                    <div class="left-check">
                        <div class="check-box">
                            <div>
                                <img src={checkIcon} class="check-icon" alt="" />
                            </div>
                            <div class="title-check">Low sugar</div>
                            <p class="text-check">Each cookie contains as little as 1 gram of sugar. It's the perfect guilt-free snack to help you beat those sweet-tooth cravings.</p>
                        </div>

                        <div class="check-box second-check-box">
                            <div>
                                <img src={checkIcon} class="check-icon" alt="" />
                            </div>
                            <div class="title-check">LOW CALORIES</div>
                            <p class="text-check">Each cookie contains just 190 calories, so you can finally feed your cravings without feeding your waistline.</p>
                        </div>
                    </div>

                    <div class="center-check">
                        <img src={cakeGif} class="cake-gif" alt="" />
                    </div>

                    <div class="right-check">
                        <div class="check-box">
                            <div>
                                <img src={checkIcon} class="check-icon" alt="" />
                            </div>
                            <div class="title-check">High Protein</div>
                            <p class="text-check">Every cookie contains 10 grams of premium grass-fed whey protein, so you'll never have to worry about hitting your macros again.</p>
                        </div>

                        <div class="check-box second-check-box">
                            <div>
                                <img src={checkIcon} class="check-icon" alt="" />
                            </div>
                            <div class="title-check">MAX CONVENIENCE</div>
                            <p class="text-check">When you need a healthy, grab & go snack slide one of these in your backpack! It's a quick & easy way to stay in shape.</p>
                        </div>
                    </div>
                </div>
                <div class="learn-block">
                    <p class="learn-text">LEARN MORE</p>
                    <img src={learn} class="learn-icon" alt="" />
                </div>
            </div>
        </section>
    )
}

export default CookieInfoComponent;
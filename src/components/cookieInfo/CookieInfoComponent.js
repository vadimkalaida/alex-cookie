import React from 'react';
import checkIcon from '../../assets/img/check-icon.png'
import learn from '../../assets/img/learn.png'
import cakeGif from '../../assets/img/main-cake.gif'

const CookieInfoComponent = () => {
    const learnMoreButtonFunc = () => {
        window.location.href = window.location.href.split('#')[0] + '#people';
    };

    return(
        <section className="cookies-info-section">
            <div className="container">
                <h2 className="title">Why You'll Love Naked Cookies</h2>
                <p className="description-title">Healthy ingredients. Great taste.</p>
                <div className="flex-check">
                    <div className="left-check">
                        <div className="check-box">
                            <div>
                                <img src={checkIcon} className="check-icon" alt="" />
                            </div>
                            <div className="title-check">Low sugar</div>
                            <p className="text-check">Each cookie contains as little as 1 gram of sugar. It's the perfect guilt-free snack to help you beat those sweet-tooth cravings.</p>
                        </div>

                        <div className="check-box second-check-box">
                            <div>
                                <img src={checkIcon} className="check-icon" alt="" />
                            </div>
                            <div className="title-check">LOW CALORIES</div>
                            <p className="text-check">Each cookie contains just 190 calories, so you can finally feed your cravings without feeding your waistline.</p>
                        </div>
                    </div>

                    <div className="center-check">
                        <img src={cakeGif} className="cake-gif" alt="" />
                    </div>

                    <div className="right-check">
                        <div className="check-box">
                            <div>
                                <img src={checkIcon} className="check-icon" alt="" />
                            </div>
                            <div className="title-check">High Protein</div>
                            <p className="text-check">Every cookie contains 10 grams of premium grass-fed whey protein, so you'll never have to worry about hitting your macros again.</p>
                        </div>

                        <div className="check-box second-check-box">
                            <div>
                                <img src={checkIcon} className="check-icon" alt="" />
                            </div>
                            <div className="title-check">MAX CONVENIENCE</div>
                            <p className="text-check">When you need a healthy, grab & go snack slide one of these in your backpack! It's a quick & easy way to stay in shape.</p>
                        </div>
                    </div>
                </div>
                <div className="learn-block">
                    <p className="learn-text" onClick={ learnMoreButtonFunc }>LEARN MORE</p>
                    <img src={learn} className="learn-icon" alt="" onClick={ learnMoreButtonFunc }/>
                </div>
            </div>
        </section>
    )
};

export default CookieInfoComponent;
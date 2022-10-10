import React from 'react';
import logo from '../../assets/img/logo.webp'
import mainImg from '../../assets/img/main-img.png'
import mainStar from '../../assets/img/star.svg'
import icon3 from '../../assets/img/3-icons.png'
import sslChekout from '../../assets/img/ssl-checkout.png'


const CookieFirstComponent = () => {
    return(
        <section className="main-section">
            <div className="container flex-main">
                <div className="left-main">
                    <a href="#">
                        <img src={logo} className="logotype" alt="Logo" />
                    </a>
                    <p className="main-description">With as little as 1 gram of sugar, these NEW Naked Protein Cookies are</p>
                    <h1 className="main-title">The perfect guilt-free snack to satisfy your sweet tooth cravings</h1>
                    <div className="mobile">
                        <img src={mainImg} className="main-img" alt="Main" />
                    </div>
                    <div className="flex-starts">
                        <p className="box-12-cookies">BOX OF 12 COOKIES | RATED 5 STARS</p>
                        <div className="box-starts">
                            <span><img src={mainStar} alt="star" className="star" /></span>
                            <span><img src={mainStar} alt="star" className="star" /></span>
                            <span><img src={mainStar} alt="star" className="star" /></span>
                            <span><img src={mainStar} alt="star" className="star" /></span>
                            <span><img src={mainStar} alt="start" className="star" /></span>
                        </div>
                    </div>
                    <div className="button-block">
                        <a href="#orderMain" className="try-button">TRY NAKED COOKIES NOW </a>
                    </div>

                    <div className="flex-info-img">
                        <div>
                            <img src={icon3} className="gmo-img" alt="" />
                        </div>
                        <div>
                            <img src={sslChekout} className="ssl-img" alt="" />
                        </div>
                    </div>
                </div>
                <div className="right-main desktop">
                    <img src={mainImg} className="main-img" alt="" />
                </div>
            </div>
        </section>
    )
};

export default CookieFirstComponent;
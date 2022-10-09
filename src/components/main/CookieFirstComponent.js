import React from 'react';
import logo from '../../assets/img/logo.webp'
import mainImg from '../../assets/img/main-img.png'
import mainStar from '../../assets/img/star.svg'
import icon3 from '../../assets/img/3-icons.png'
import sslChekout from '../../assets/img/ssl-checkout.png'


const CookieFirstComponent = () => {
    return(
        <section class="main-section">
            <div class="container flex-main">
                <div class="left-main">
                    <a href="#">
                        <img src={logo} class="logotype" alt=""></img>
                    </a>
                    <p class="main-description">With as little as 1 gram of sugar, these NEW Naked Protein Cookies are</p>
                    <h1 class="main-title">The perfect guilt-free snack to satisfy your sweet tooth cravings</h1>
                    <div class="mobile">
                        <img src={mainImg} class="main-img" alt=""></img>
                    </div>
                    <div class="flex-starts">
                        <p class="box-12-cookies">BOX OF 12 COOKIES | RATED 5 STARS</p>
                        <div class="box-starts">
                            <span><img src={mainStar} alt="" class="star" /></span>
                            <span><img src={mainStar} alt="" class="star" /></span>
                            <span><img src={mainStar} alt="" class="star" /></span>
                            <span><img src={mainStar} alt="" class="star" /></span>
                            <span><img src={mainStar} alt="" class="star" /></span>
                        </div>
                    </div>
                    <div class="button-block">
                        <a href="#orderMain" class="try-button">TRY NAKED COOKIES NOW </a>
                    </div>

                    <div class="flex-info-img">
                        <div>
                            <img src={icon3} class="gmo-img" alt="" />
                        </div>
                        <div>
                            <img src={sslChekout} class="ssl-img" alt="" />
                        </div>
                    </div>
                </div>
                <div class="right-main desktop">
                    <img src={mainImg} class="main-img" alt="" />
                </div>
            </div>
        </section>
    )
}

export default CookieFirstComponent;
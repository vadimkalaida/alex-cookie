import React, { useRef } from 'react';
import logo from '../../assets/img/logo.webp'
import mainImg from '../../assets/img/main-img.png'
import mainStar from '../../assets/img/star.svg'
import icon3 from '../../assets/img/3-icons.png'
import underButton from '../../assets/img/under-button.png'
import label from '../../assets/img/label-main.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_image1 from '../../assets/top-slider/Untitled design - 2022-10-24T193745.090.png';
import slider_image2 from '../../assets/top-slider/Untitled design - 2022-10-24T193806.751.png';
import slider_image3 from '../../assets/top-slider/Untitled design - 2022-10-24T193953.928.png';
import slider_image4 from '../../assets/top-slider/Untitled design - 2022-10-24T194026.963.png';
import slider_image5 from '../../assets/top-slider/Untitled design - 2022-10-24T194111.795.png';
import slider_image6 from '../../assets/top-slider/Untitled design - 2022-10-24T194153.941.png';

const CookieFirstComponent = () => {

    const sliderRef = useRef();

    let carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        customPaging: i => (
          <div className="mobile-slick-dot">
          </div>
        )
    };

    return(
        <section className="main-section">
            <div className="mobile-slider-wrapper">
                <button className="mobile-slider-step-btn" onClick={() => sliderRef?.current?.slickPrev()}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <Slider ref={ sliderRef } { ...carouselSettings }>
                    <img src={ slider_image1 } alt="Slider Image 1"/>
                    <img src={ slider_image2 } alt="Slider Image 2"/>
                    <img src={ slider_image3 } alt="Slider Image 3"/>
                    <img src={ slider_image4 } alt="Slider Image 4"/>
                    <img src={ slider_image5 } alt="Slider Image 5"/>
                    <img src={ slider_image6 } alt="Slider Image 6"/>
                </Slider>
                <button className="mobile-slider-step-btn" onClick={() => sliderRef?.current?.slickNext()}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
            <div className="container flex-main">
                <div className="left-main">
                    <a href="#" className="main-section-logo">
                        <img src={logo} className="logotype" alt="Logo" />
                    </a>
                    <p className="main-description">Naked Protein Cookies: They Taste Just Like The Real Thing!</p>
                    {/*<h1 className="main-title">The perfect guilt-free snack to satisfy your sweet tooth cravings</h1>*/}
                    <ul className="main-list">
                        <li>Soft & chewy just like real cookies</li>
                        <li>Zero chalky protein flavor or aftertaste</li>
                        <li>Get fit faster: 10g of protein per 50g cookie</li>
                        <li>Gluten-free, soy-free and no GMOs</li>
                    </ul>
                    <div className="review-main-block">
                        <div className="box-starts">
                            <span><img src={mainStar} alt="star" className="star" /></span>
                            <span><img src={mainStar} alt="star" className="star" /></span>
                            <span><img src={mainStar} alt="star" className="star" /></span>
                            <span><img src={mainStar} alt="star" className="star" /></span>
                            <span><img src={mainStar} alt="start" className="star" /></span>
                        </div>
                        <p className="review-main">105 reviews</p>
                    </div>
                    <div className="mobile">
                        <img src={mainImg} className="main-img" alt="Main" />
                    </div>
                    <div className="flex-starts">
                        <p className="box-12-cookies"><span className="old-price">$45.99</span> $29.99 <span className="box-small">/ BOX OF 12 COOKIES</span></p>
                    </div>
                    <div className="button-block">
                        <a href="#orderMain" className="try-button">→ TRY NAKED COOKIES NOW</a>
                    </div>

                    <div class="mobile-main">
                        <p className="box-12-cookies">BOX OF 12 COOKIES | RATED 5 STARS</p>
                        <div>
                            <img src={icon3} className="gmo-img" alt="" />
                        </div>
                    </div>

                    <div className="flex-info-img">
                        <div>
                            <img src={underButton} className="gmo-img" alt="" />
                        </div>
                    </div>
                </div>
                <div className="right-main desktop">
                    <img src={mainImg} className="main-img" alt="" />
                    <img src={label} className="label-main" alt="" />
                </div>
            </div>
        </section>
    )
};

export default CookieFirstComponent;
import React from 'react';
import cm1 from '../../assets/img/cm-1.png'
import cm2 from '../../assets/img/cm-2.png'
import cm3 from '../../assets/img/cm-3.png'
import cm4 from '../../assets/img/cm-4.svg'
import cm5 from '../../assets/img/cm-5.webp'
import cm6 from '../../assets/img/cm-6.png'
import cm7 from '../../assets/img/cm-7.png'
import cm8 from '../../assets/img/cm-8.png'

const CompanyUseComponent = () => {
    return(
        <section className="as-see-section">
            <div className="as-see-bg"></div>
            <div className="container">
                <p className="as-see-text">AS SEEN ON:</p>
                <div className="flex-cm">
                    <img src={cm1} className="cm-1" alt="" />
                    <img src={cm2} className="cm-2" alt="" />
                    <img src={cm3} className="cm-3" alt="" />
                    <img src={cm4} className="cm-4" alt="" />
                    <img src={cm5} className="cm-5" alt="" />
                    <img src={cm6} className="cm-6" alt="" />
                    <img src={cm7} className="cm-7" alt="" />
                    <img src={cm8} className="cm-8" alt="" />
                </div>
            </div>
        </section>
    )
};

export default CompanyUseComponent;
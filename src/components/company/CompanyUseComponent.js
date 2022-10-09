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
        <section class="as-see-section">
            <div class="as-see-bg"></div>
            <div class="container">
                <p class="as-see-text">AS SEEN ON:</p>
                <div class="flex-cm">
                    <img src={cm1} class="cm-1" alt="" />
                    <img src={cm2} class="cm-2" alt="" />
                    <img src={cm3} class="cm-3" alt="" />
                    <img src={cm4} class="cm-4" alt="" />
                    <img src={cm5} class="cm-5" alt="" />
                    <img src={cm6} class="cm-6" alt="" />
                    <img src={cm7} class="cm-7" alt="" />
                    <img src={cm8} class="cm-8" alt="" />
                </div>
            </div>
        </section>
    )
}

export default CompanyUseComponent;
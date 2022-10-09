import React from 'react';
import finger from '../../assets/img/finger.png'

const GrabComponent = () => {
    return(
        <section class="section-box">
            <div class="grab-block">
                <div class="container">
                    <h2 class="grab-box-title">Hungry? Grab A Box Today</h2>
                    <img src={finger} class="finger" alt="" />
                </div>
            </div>
        </section>
    )
}

export default GrabComponent;
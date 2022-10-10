import React from 'react';
import finger from '../../assets/img/finger.png'

const GrabComponent = () => {
    return(
        <section className="section-box">
            <div className="grab-block">
                <div className="container">
                    <h2 className="grab-box-title">Hungry? Grab A Box Today</h2>
                    <img src={finger} className="finger" alt="" />
                </div>
            </div>
        </section>
    )
};

export default GrabComponent;
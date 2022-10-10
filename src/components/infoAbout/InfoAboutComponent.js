import React from 'react';
import infoAboutData from "./data";

const InfoAboutComponent = () => {
    return(
        <section className="info-section">
            <div className="container">
                { infoAboutData.map((item, index) =>
                    <div key={ index } className="flex-info">
                        <div className="text-info">
                            <p className="info-title">{ item.title }</p>
                            <p className="info-des">{ item.description }</p>
                        </div>
                        <div className="img-info">
                            <img src={item.photo} className="des-img" alt="" />
                        </div>
                    </div>
                ) }
            </div>
        </section>
    )
};

export default InfoAboutComponent;
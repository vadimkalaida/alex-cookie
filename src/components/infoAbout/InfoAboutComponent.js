import React from 'react';
import des1 from "../../assets/img/des-1.png";
import des2 from "../../assets/img/des-2.png";
import des3 from "../../assets/img/des-3.png";
import check from "../../assets/img/check-icon.png";

const InfoAboutComponent = () => {
    return(
        <section className="info-section">
            <div className="container">
              <div className="flex-info">
                <div className="text-info">
                  <div className="flex-des">
                    <img src={check} className="check-des"  alt="" />
                    <p className="info-title">A healthy, convenient snack for when you're on the go</p>
                  </div>
                </div>
                <div className="img-info">
                  <img src={des1} className="des-img" alt="" />
                </div>
              </div>

              <div className="flex-info">
                <div className="text-info">
                  <div className="flex-des">
                      <img src={check} className="check-des"  alt="" />
                      <p className="info-title">The perfect guilt-free treat to control your cravings</p>
                  </div>
                </div>
                <div className="img-info">
                  <img src={des2} className="des-img" alt="" />
                </div>
              </div>

              <div className="flex-info">
                <div className="text-info">
                  <div className="flex-des">
                      <img src={check} className="check-des"  alt="" />
                      <p className="info-title">Hit your protein targets more easily & get fit faster</p>
                  </div>
                </div>
                <div className="img-info">
                  <img src={des3} className="des-img" alt="" />
                </div>
              </div>

            </div>
        </section>
    )
};

export default InfoAboutComponent;
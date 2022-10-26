import React from 'react';
import face1 from "../../assets/img/face-1.png";
import face2 from "../../assets/img/face-2.png";
import face3 from "../../assets/img/face-3.png";

const PeopleComponent = () => {
    return(
        <section className="section-people" id="people">
            <div className="container">
                <h2 className="title white">Try America's Favorite Protein Snack!</h2>
                <div className="face-flex">
                  <div className="face-block">
                    <div>
                      <img src={ face1 } className="face-img" alt="" />
                    </div>
                    <div>
                      <p className="text-face">"I love these, they make it so easy to hit my macros!"</p>
                      <p className="name-face">Kelsey D.</p>
                    </div>
                  </div>
                  <div className="face-block">
                    <div>
                      <img src={ face2 } className="face-img" alt="" />
                    </div>
                    <div>
                      <p className="text-face">"Dude, these taste sooo good. Best protein snack ever."</p>
                      <p className="name-face">Tyler N.</p>
                    </div>
                  </div>
                  <div className="face-block">
                    <div>
                      <img src={ face3 } className="face-img" alt="" />
                    </div>
                    <div>
                      <p className="text-face">"They are soft and chewy just like a real cookie!"</p>
                      <p className="name-face">Mary M.</p>
                    </div>
                  </div>
                </div>
                <a href="#orderMain" className="button-get mobile-but">HELP ME HIT MY MACROS! </a>
            </div>
        </section>
    )
};

export default PeopleComponent;
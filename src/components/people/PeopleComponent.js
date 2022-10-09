import React from 'react';
import face1 from '../../assets/img/face-1.png'
import face2 from '../../assets/img/face-2.png'
import face3 from '../../assets/img/face-3.png'

const PeopleComponent = () => {
    return(
        <section class="section-people">
            <div class="container">
                <h2 class="title white">People all over the US are ditching chalky protein bars for Naked Cookies!</h2>
                <div class="face-flex">
                    <div class="face-block">
                        <div>
                            <img src={face1} class="face-img" alt="" />
                        </div>
                        <p class="text-face">"I can't believe these only have 1 gram of sugar!"</p>
                        <p class="name-face">KELSEY D.</p>
                    </div>
                    <div class="face-block">
                        <div>
                            <img src={face2} class="face-img" alt="" />
                        </div>
                        <p class="text-face">"Dude, these taste sooo good. Best protein snack ever."</p>
                        <p class="name-face">TYLER N.</p>
                    </div>
                    <div class="face-block">
                        <div>
                            <img src={face3} class="face-img" alt="" />
                        </div>
                        <p class="text-face">"They are soft and chewy just like a real cookie!"</p>
                        <p class="name-face">MARY M.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PeopleComponent;
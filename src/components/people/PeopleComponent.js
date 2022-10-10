import React from 'react';
import peopleData from './data';

const PeopleComponent = () => {
    return(
        <section className="section-people">
            <div className="container">
                <h2 className="title white">People all over the US are ditching chalky protein bars for Naked Cookies!</h2>
                <div className="face-flex">
                    { peopleData.map((item, index) =>
                      <div className="face-block" key={ index }>
                          <div>
                              <img src={ item.photo } className="face-img" alt="" />
                          </div>
                          <p className="text-face">"{ item.quote }"</p>
                          <p className="name-face">{ item.name }</p>
                      </div>
                    ) }
                </div>
            </div>
        </section>
    )
};

export default PeopleComponent;
import React from 'react';
import './OrderWaitPopUpComponent.css';
import MoonLoader from "react-spinners/MoonLoader";

const OrderWaitPopUpComponent = () => {
  return(
    <div className="orderWaitPopUp">
      <div className="orderWaitPopUpBlock">
        <p className="orderWaitPopUpTitle">Preparing your order...</p>
        <MoonLoader color={"#903E81"} loading={ true } size={50} />
      </div>
    </div>
  );
};

export default OrderWaitPopUpComponent;
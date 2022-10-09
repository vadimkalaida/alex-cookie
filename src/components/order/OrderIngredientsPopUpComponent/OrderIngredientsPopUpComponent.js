import React, { useEffect, useRef } from 'react';
import './OrderIngredientsPopUpComponent.css';

const OrderIngredientsPopUpComponent = (props) => {
  const popUpRef = useRef();

  useEffect(() => {
    popUpRef.current.style.display = props.isIngredientsPopUpVisible ? 'flex' : 'none';
    popUpRef.current.style.height = props.isIngredientsPopUpVisible ? '100%' : '0';
    setTimeout(() => {
      popUpRef.current.style.opacity = props.isIngredientsPopUpVisible ? 1 : 0;
    }, 100);
  }, [props.isIngredientsPopUpVisible]);
  return(
    <div className="orderIngredientsPopUp" ref={ popUpRef }>
      <div className="orderIngredientsPopUpBlock">
        <button className="orderIngredientsPopUpCloseBtn" onClick={ props.changeStatusOfIngredientsPopUp ? () => props.changeStatusOfIngredientsPopUp() : null }>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <p style={{ color: props.currentFlavorIngredient && props.currentFlavorIngredient.color ?
          props.currentFlavorIngredient.color : '#000' }}>
          Nutritional information
        </p>
        { props.currentFlavorIngredient && props.currentFlavorIngredient.ingredients ?
          <img src={ props.currentFlavorIngredient.ingredients } alt="Ingredient"/> : null
        }
      </div>
    </div>
  );
};

export default OrderIngredientsPopUpComponent;
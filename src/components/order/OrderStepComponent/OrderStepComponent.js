import React, { useState, useEffect, useRef } from 'react';
import './OrderStepComponent.css';
import { cookieBoxesData, cookieFlavorsData } from "./data";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OrderStepFlavorSubComponent from "./subcomponents/OrderStepFlavorSubComponent/OrderStepFlavorSubComponent";
import OrderStepBoxSubComponent from "./subcomponents/OrderStepBoxSubComponent/OrderStepBoxSubComponent";
import { moveArrayItem } from "../../../services/array.service";

const OrderStepComponent = (props) => {
  const [ isExpanded, setIsExpanded ] = useState(props.currentStep === props.stepNum);

  const [ cookieMobileBoxesData, setCookieMobileBoxesData ] = useState(cookieBoxesData);

  useEffect(() => {
    if(cookieBoxesData && cookieBoxesData.length > 0) {
      setCookieMobileBoxesData(moveArrayItem(1, 0, cookieBoxesData));
    }
  }, []);

  let carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const [ chosenFlavors, setChosenFlavors ] = useState({
    chocolate: 0,
    oatmeal: 0,
    sugar: 0,
  });

  const currentOrder = useSelector(state => state.order);

  const listRef = useRef();
  const listMobileRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    setIsExpanded(props.currentStep === props.stepNum);
  }, [props.currentStep]);

  useEffect(() => {
    listRef.current.style.display = isExpanded ? 'flex' : 'none';
    listMobileRef.current.style.display = isExpanded ? 'flex' : 'none';
    setTimeout(() => {
      listRef.current.style.opacity = isExpanded ? 1 : 0;
      listMobileRef.current.style.opacity = isExpanded ? 1 : 0;
    }, 100);
  }, [isExpanded]);

  const changeNumOfFlavors = (flavorType, isAdd) => {
    let myChosenFlavors = { ...chosenFlavors };

    myChosenFlavors[flavorType] += isAdd ? ( !props.isLimit &&
      chosenFlavors[flavorType] + props.selectedFlavors.length < currentOrder[0].boxes.length ? 1 : 0
    ) : (
      chosenFlavors[flavorType] > 0 ? -1 : 0
    );

    setChosenFlavors(myChosenFlavors);
  };

  useEffect(() => {
    if(props.isLimit) {
      setChosenFlavors(
        {
          chocolate: 0,
          oatmeal: 0,
          sugar: 0,
        }
      );
    }
  }, [props.isLimit]);

  return(
    <div className='orderStep' id={`step${ props.stepNum }`}>
      <div className="orderStepHeader">
        <p className="orderStepHeaderTitle">
          Step #{ props.stepNum }: { props.title }
        </p>
        <div className="orderStepHeaderArrow" style={{ transform: isExpanded ? 'rotate(-180deg)' : 'rotate(0)' }}>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <div className="orderStepList orderStepListDesktop" ref={ listRef }>
        { props.stepNum === 1 ?
          cookieBoxesData.map((item, index) =>
            <OrderStepBoxSubComponent key={ index } item={ item } currentOrder={ currentOrder } selectBoxes={ props.selectBoxes } />
          )
          :
          props.stepNum === 2 && currentOrder && currentOrder[0] && currentOrder[0].boxes && currentOrder[0].boxes.length > 0 ?
            cookieFlavorsData.map((item, index) =>
              <OrderStepFlavorSubComponent key={ index } item={ item } chosenFlavors={ chosenFlavors }
               isExpanded={ isExpanded } changeNumOfFlavors={ changeNumOfFlavors } isLimit={ props.isLimit }
               selectedFlavors={ props.selectedFlavors } currentOrder={ currentOrder } addFlavorToOrder={ props.addFlavorToOrder }
               changeStatusOfIngredientsPopUp={ props.changeStatusOfIngredientsPopUp }/>
            )
             : null
        }
      </div>
      <div className="orderStepList orderStepListMobile" ref={ listMobileRef }>
        { props.stepNum === 1 ?
          <>
            <button className="orderStepSliderBtn" onClick={() => sliderRef?.current?.slickPrev()}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <Slider ref={ sliderRef } { ...carouselSettings }>
              {
                cookieMobileBoxesData.map((item, index) =>
                  <OrderStepBoxSubComponent key={ index } item={ item } currentOrder={ currentOrder } selectBoxes={ props.selectBoxes } />
                )
              }
            </Slider>
            <button className="orderStepSliderBtn" onClick={() => sliderRef?.current?.slickNext()}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </>
          :
          props.stepNum === 2 && currentOrder && currentOrder[0] && currentOrder[0].boxes && currentOrder[0].boxes.length > 0 ?
            <>
              <button className="orderStepSliderBtn" onClick={() => sliderRef?.current?.slickPrev()}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <Slider ref={ sliderRef } { ...carouselSettings }>
                {
                  cookieFlavorsData.map((item, index) =>
                    <OrderStepFlavorSubComponent key={ index } item={ item } chosenFlavors={ chosenFlavors }
                                                 isExpanded={ isExpanded } changeNumOfFlavors={ changeNumOfFlavors } isLimit={ props.isLimit }
                                                 selectedFlavors={ props.selectedFlavors } currentOrder={ currentOrder } addFlavorToOrder={ props.addFlavorToOrder }
                                                 changeStatusOfIngredientsPopUp={ props.changeStatusOfIngredientsPopUp }/>
                  )
                }
              </Slider>
              <button className="orderStepSliderBtn" onClick={() => sliderRef?.current?.slickNext()}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </>
             : null
        }
      </div>
    </div>
  );
};

export default OrderStepComponent;
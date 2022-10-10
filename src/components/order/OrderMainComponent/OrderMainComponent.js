import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './OrderMainComponent.css';
import { orderActions } from "../../../store/actions";
import OrderFooterComponent from "../OrderFooterComponent/OrderFooterComponent";
import OrderStepComponent from "../OrderStepComponent/OrderStepComponent";
import OrderIngredientsPopUpComponent from "../OrderIngredientsPopUpComponent/OrderIngredientsPopUpComponent";

const OrderMainComponent = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderActions.setNewOrder([]));
  }, []);

  const currentOrder = useSelector(state => state.order);
  const [ currentStep, setCurrentStep ] = useState(1);
  const [ selectedFlavorsIndexes, setSelectedFlavorsIndexes ] = useState({
    chocolate: [],
    sugar: [],
    oatmeal: []
  });
  const [ selectedFlavors, setSelectedFlavors ] = useState([]);
  const [ currentFlavorIngredient, setCurrentFlavorIngredient ] = useState(null);
  const [ isIngredientsPopUpVisible, setIsIngredientsPopUpVisible ] = useState(false);

  const selectBoxes = (item) => {
    dispatch(orderActions.setNewOrder([item]));
    setSelectedFlavorsIndexes({
      chocolate: [],
      sugar: [],
      oatmeal: []
    });
    setSelectedFlavors([]);
  };

  const addFlavorToOrder = (flavorType, flavorsNum) => {
    let currentSelectedFlavors = [ ...selectedFlavors ];
    let currentSelectedFlavorsIndexes = { ...selectedFlavorsIndexes };

    if(currentSelectedFlavorsIndexes[flavorType] && currentSelectedFlavors.length < currentOrder[0].boxes.length) {

      for(let i = 0; i < flavorsNum; i++) {
        currentSelectedFlavors.push({
          name: flavorType,
          index: currentSelectedFlavors.length > 0 ? currentSelectedFlavors[currentSelectedFlavors.length - 1].index + 1 : 0
        });

        currentSelectedFlavorsIndexes[flavorType].push(currentSelectedFlavors[currentSelectedFlavors.length - 1].index);
      }

      setSelectedFlavors(currentSelectedFlavors);
      setSelectedFlavorsIndexes(currentSelectedFlavorsIndexes);
    }

  };

  const removeFlavor = (flavorType, index = -1) => {
    let currentSelectedFlavors = [ ...selectedFlavors ];
    let currentSelectedFlavorsIndexes = { ...selectedFlavorsIndexes };
    let indexToRemove = -1;
    let myIndex = index;

    if(myIndex !== -1) {
      currentSelectedFlavorsIndexes[flavorType].splice(currentSelectedFlavorsIndexes[flavorType].indexOf(myIndex), 1);
    } else {
      myIndex = currentSelectedFlavorsIndexes[flavorType]
      && currentSelectedFlavorsIndexes[flavorType].length > 0 ?
        currentSelectedFlavorsIndexes[flavorType].pop() : -1;
    }

    for(let i = 0; i < currentSelectedFlavors.length; i++) {
      if(currentSelectedFlavors[i].index === myIndex) {
        indexToRemove = i;
        break;
      }
    }

    if(indexToRemove !== -1) {
      currentSelectedFlavors.splice(indexToRemove, 1);

      setSelectedFlavors(currentSelectedFlavors);
      setSelectedFlavorsIndexes(currentSelectedFlavorsIndexes);
    }
  };

  const changeCurrentStep = (isNext) => {
    if(isNext) {
      if(currentStep === 2) {
        let newObj = {...currentOrder[0]};
        newObj.boxes = selectedFlavors;
        dispatch(orderActions.setNewOrder([newObj]));
      }
      setCurrentStep(currentStep < 2 ? currentStep + 1 : 3);
    } else {
      setCurrentStep(currentStep > 1 ? currentStep - 1 : 1);
    }
  };

  const changeStatusOfIngredientsPopUp = (ingredientItem = null) => {
    if(!isIngredientsPopUpVisible && ingredientItem) {
      setIsIngredientsPopUpVisible(true);
      setCurrentFlavorIngredient(ingredientItem);
    } else {
      setIsIngredientsPopUpVisible(false);
      setCurrentFlavorIngredient(null);
    }
  };

  useEffect(() => {
    console.log(currentOrder);
  }, [currentOrder]);

  return(
    <div className="orderMain" id="orderMain">
      <OrderIngredientsPopUpComponent changeStatusOfIngredientsPopUp={ changeStatusOfIngredientsPopUp }
      currentFlavorIngredient={ currentFlavorIngredient } isIngredientsPopUpVisible={ isIngredientsPopUpVisible }/>

      <OrderStepComponent title="Select Your Package" currentStep={ currentStep } stepNum={1} selectBoxes={ selectBoxes }/>

      <OrderStepComponent title="Select Your Flavors" currentStep={ currentStep } stepNum={2}
      selectedFlavorsIndexes={ selectedFlavorsIndexes } changeStatusOfIngredientsPopUp={ changeStatusOfIngredientsPopUp }
      isLimit={ currentOrder && currentOrder.length > 0 ? (selectedFlavors.length >= currentOrder[0].boxes.length) : null }
      selectedFlavors={ selectedFlavors } addFlavorToOrder={ addFlavorToOrder }/>

      <OrderFooterComponent currentStep={ currentStep } selectedFlavors={ selectedFlavors }
      changeCurrentStep={ changeCurrentStep } removeFlavor={ removeFlavor }
      isLimit={ currentOrder && currentOrder.length > 0 ? (selectedFlavors.length >= currentOrder[0].boxes.length) : null }
      mainRef={ props.mainRef }/>

    </div>
  );
};

export default OrderMainComponent;
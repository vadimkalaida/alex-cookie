import React from 'react';

const OrderStepFlavorSubComponent = (props) => {
  return(
    <div className="orderStepListItem">
      <img src={ props.item.cover } alt="Cover" className="orderStepListItemImage"/>
      <div className="orderStepListItemContent">
        <p className="orderStepListItemTitle">{ props.item.title }</p>
        <p className="orderStepListItemAdditionalText orderStepListItemSmallTitle">
          Quantity
        </p>

        <div className="orderStepListItemCounter">

          <button className="orderStepListItemCounterBox" onClick={ props.chosenFlavors[props.item.name] > 0
          && props.isExpanded ? () => props.changeNumOfFlavors(props.item.name, false) : () => {}}
                  style={ props.chosenFlavors[props.item.name] < 1 ?
                    { pointerEvents: 'none', background: '#EAEAEA' } : {}}>-</button>

          <div className="orderStepListItemCounterBox">{ props.chosenFlavors[props.item.name]}</div>

          <button className="orderStepListItemCounterBox"
                  style={ props.isLimit || props.chosenFlavors[props.item.name] + props.selectedFlavors.length >= props.currentOrder[0].boxes.length ?
                    { pointerEvents: 'none', background: '#EAEAEA' } : {} }
                  onClick={ props.isExpanded && !props.isLimit &&
                  props.chosenFlavors[props.item.name] + props.selectedFlavors.length < props.currentOrder[0].boxes.length ?
                    () => props.changeNumOfFlavors(props.item.name, true) : () => {}}>+</button>

        </div>

        <button className="orderStepListItemButton"
                style={ props.isLimit || props.chosenFlavors[props.item.name] + props.selectedFlavors.length > props.currentOrder[0].boxes.length ||
                props.chosenFlavors[props.item.name] === 0 ? { pointerEvents: 'none', background: '#EAEAEA', color: '#9D9D9D' } : {} }
                onClick={props.addFlavorToOrder ? () => props.addFlavorToOrder(props.item.name, props.chosenFlavors[props.item.name]) : () => {}}>
          + add to pack
        </button>

        <button className="orderStepListItemShowPopUpBtn"
                onClick={props.changeStatusOfIngredientsPopUp ? () => props.changeStatusOfIngredientsPopUp({
                  ingredients: props.item.ingredients,
                  color: props.item.color
                }) : () => {}}>show ingredients</button>

      </div>
    </div>
  );
};

export default OrderStepFlavorSubComponent;
import React from 'react';

const OrderStepBoxSubComponent = (props) => {
  return(
    <div className="orderStepListItem">
      <img src={ props.item.cover } alt="Cover" className="orderStepListItemImage"/>
      <div className="orderStepListItemContent">
        <p className="orderStepListItemTitle">{ props.item.title }</p>
        <p className="orderStepListItemSubTitle">{ props.item.description ? `(${ props.item.description })` : '' }&#8203;</p>
        <p className="orderStepListItemPrice">
          ${ props.item.currPrice.toFixed(2) } { props.item.prevPrice ? <span>
            ${ props.item.prevPrice }
          </span> : '' }
        </p>
        <p className="orderStepListItemAdditionalText">{ props.item.additionalText }</p>
        <button className="orderStepListItemButton" style={ props.currentOrder && props.currentOrder[0] &&
        props.currentOrder[0].id === props.item.id ? { pointerEvents: 'none', background: '#EAEAEA', color: '#9D9D9D' } : {} }
                onClick={ (!props.currentOrder || !props.currentOrder[0] || !props.currentOrder[0].id ||
                  props.currentOrder[0].id !== props.item.id) && props.selectBoxes ? () => props.selectBoxes(props.item) : () => {}  }>
          + add to order
        </button>
        <p className="orderStepListItemAdditionalText orderStepListItemBottomText">
          { props.item.bottomText }
          { props.item.id === 0 ?
            <span>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </span> : null
          }
        </p>
      </div>
    </div>
  );
};

export default OrderStepBoxSubComponent;
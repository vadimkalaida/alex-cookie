import React, { useState, useEffect, useRef } from 'react';
import './OrderFooterComponent.css';
import { useSelector } from "react-redux";
import cookieBox from '../../../assets/icons/cookie_box.webp';
import cookie from '../../../assets/icons/cookie.webp';
import chocolateCookie from '../../../assets/icons/chocolate_cookie.webp';
import oatmealCookie from '../../../assets/icons/oatmeal_cookie.webp';
import sugarCookie from '../../../assets/icons/sugar_cookie.webp';
import getCheckoutLink from "../../../services/checkout-link.service";

const OrderFooterComponent = (props) => {
  const currentOrder = useSelector(state => state.order);
  const selectedIcon = useRef();
  const flavorImages = {
    chocolate: chocolateCookie,
    oatmeal: oatmealCookie,
    sugar: sugarCookie
  };
  const [ isSelectionExpanded, setIsSelectionExpanded ] = useState(false);
  const [ selectedFlavorsNum, setSelectedFlavorsNum ] = useState(props.selectedFlavors ? props.selectedFlavors.length : 0);
  const [ isVisible, setIsVisible ] = useState(false);

  useEffect(() => {
    if(props.selectedFlavors) setSelectedFlavorsNum(props.selectedFlavors.length);
  }, [props.selectedFlavors]);

  useEffect(() => {
    setIsVisible(currentOrder && currentOrder.length > 0);
  }, [currentOrder]);

  useEffect(() => {
    if(props.currentStep > 2) {
      setIsVisible(false);
      if(currentOrder && currentOrder.length > 0 && currentOrder[0].boxes && currentOrder[0].boxes.length > 0) {
        window.location.href = getCheckoutLink(currentOrder[0].boxes);
      }
    }

  }, [props.currentStep, currentOrder]);

  useEffect(() => {
    if(props.mainRef) {
      props.mainRef.current.style.paddingBottom = isVisible ? '100px' : 0;
    }
  }, [isVisible]);

  return(
    <div className="orderFooter" style={{ bottom: isVisible ? '0' : '-100px' }}>
      <div className="orderFooterSelectionTab">
        { currentOrder && currentOrder.length > 0 ?
          <>
            <div className="orderFooterSelectionTabHeader" onClick={() => setIsSelectionExpanded(!isSelectionExpanded)}>
              <p>
                { props.currentStep === 1 ?
                  `${ currentOrder[0].boxes.length + (currentOrder[0].boxes.length === 1 ? ' Box' : ' Boxes') } Of Naked Cookies Selected`
                  : `${ selectedFlavorsNum } of ${ currentOrder[0].boxes.length } Flavors Selected`
                }
              </p>
              <button>
                <i className="fa-solid fa-chevron-down" style={{ transform: isSelectionExpanded ? 'rotate(0)' : 'rotate(-180deg)' }}></i>
              </button>
            </div>
            <div className="orderFooterSelectionTabContent" style={{ height: isSelectionExpanded ? '60px' : '0' }}>
              { currentOrder && currentOrder.length > 0 && currentOrder[0].boxes ?
                currentOrder[0].boxes.map((item, index) =>
                  <div className="orderFooterSelectionTabContentIcon" ref={ selectedIcon } key={ index }
                       style={ isSelectionExpanded ? { opacity: 1 } : { opacity: 0 } }>
                    { props.currentStep === 1 ?
                      <img src={ cookieBox } alt="Cookie Box"/>
                      :
                      <>
                        { props.selectedFlavors[index] ?
                          <button onClick={ props.removeFlavor ? () => props.removeFlavor(props.selectedFlavors[index].name, props.selectedFlavors[index].index) : () => {} }>
                            <i className="fa-solid fa-xmark"></i>
                          </button> : null
                        }
                        <img src={ props.selectedFlavors[index] ? flavorImages[props.selectedFlavors[index].name] : cookie } alt="Cookie"
                             style={ !props.selectedFlavors[index] ? { opacity: '.6' } : { opacity: '1' } }/>
                      </>
                    }
                  </div>
                ) : null
              }
            </div>
          </>
          : null
        }
      </div>
      <div className="orderFooterSummaryTab">
        { currentOrder && currentOrder.length > 0 ?
          <>
            <p className="orderFooterSummaryTabText">
              Total: ${ currentOrder[0].currPrice }
              { currentOrder[0].isWithBonus ?
                <span>{ currentOrder[0].bottomText } unlocked</span> : null
              }
            </p>
            <div className="orderFooterSummaryTabControls">
              { props.currentStep > 1 ?
                <button onClick={ props.currentStep > 1 ? () => props.changeCurrentStep(false) : () => {} }
                        style={ props.currentStep < 2 ? { pointerEvents: 'none', background: '#EAEAEA',
                        color: '#9D9D9D', borderColor: '#9D9D9D', marginRight: '10px'} : { color: '#000', marginRight: '10px' } }>
                  <i className="fa-solid fa-arrow-left"></i>
                </button> : null
              }
              <button style={ props.currentStep > 1 && !props.isLimit ?
              { pointerEvents: 'none', background: '#EAEAEA', color: '#9D9D9D', borderColor: '#9D9D9D'} : {} }
              onClick={ props.currentStep < 2 ? () => props.changeCurrentStep(true)
              : props.isLimit ? () => props.changeCurrentStep(true) : () => {} }>
                { props.currentStep > 1 ? 'Finish' : 'Next' }
              </button>
            </div>
          </> : null
        }
      </div>
    </div>
  );
};

export default OrderFooterComponent;
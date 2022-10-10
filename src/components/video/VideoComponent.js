import React, {useState} from 'react';
import labelInfo from '../../assets/img/label-info.png'
import videoFlavorsData from './data';
import OrderIngredientsPopUpComponent from "../order/OrderIngredientsPopUpComponent/OrderIngredientsPopUpComponent";

const VideoComponent = () => {
  const [ isIngredientsPopUpVisible, setIsIngredientsPopUpVisible ] = useState(false);
  const [ currentFlavorIngredient, setCurrentFlavorIngredient ] = useState(null);

  const changeStatusOfIngredientsPopUp = (ingredientItem = null) => {
    if(!isIngredientsPopUpVisible && ingredientItem) {
      setIsIngredientsPopUpVisible(true);
      setCurrentFlavorIngredient(ingredientItem);
    } else {
      setIsIngredientsPopUpVisible(false);
      setCurrentFlavorIngredient(null);
    }
  };

  return(
    <section className="videos-section">
      <OrderIngredientsPopUpComponent changeStatusOfIngredientsPopUp={ changeStatusOfIngredientsPopUp }
      currentFlavorIngredient={ currentFlavorIngredient } isIngredientsPopUpVisible={ isIngredientsPopUpVisible }/>

      <div className="container">
        <div className="flex-video">
          { videoFlavorsData.map((item, index) =>
            <div key={ index } className="video-block">
              <video controls className="video">
                <source src={ item.video } type="video/mp4" />
              </video>
              <div className="video-name">{ item.title }</div>
              <button className="ingretients" onClick={() => changeStatusOfIngredientsPopUp(item)}>SHOW INGREDIENTS</button>
            </div>
          ) }
        </div>
        <div className="label-block">
          <img src={labelInfo} className="label-info" alt="" />
        </div>
      </div>

    </section>
  )
};

export default VideoComponent;
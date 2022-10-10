import chocolateIngredientsImage from "../../assets/cookie-ingredients/chocolate_ingredients.png";
import chocolateVideo from '../../assets/video/NN_Choco Chip EXP_V2.mp4'
import oatmealIngredientsImage from "../../assets/cookie-ingredients/oatmeal_ingredients.png";
import oatmealVideo from '../../assets/video/NN_OatmealRaisinCookie_V3.mp4'
import sugarIngredientsImage from "../../assets/cookie-ingredients/sugar_ingredients.png";
import sugarVideo from '../../assets/video/NN_SugarCookie_V3.mp4'

const videoFlavorsData = [
  {
    title: 'Chocolate Chip Cookies',
    video: chocolateVideo,
    ingredients: chocolateIngredientsImage,
    color: '#5B3D3F'
  },
  {
    title: 'Oatmeal Raisin Cookies',
    video: oatmealVideo,
    ingredients: oatmealIngredientsImage,
    color: '#903E81'
  },
  {
    title: 'Sugar Cookies',
    video: sugarVideo,
    ingredients: sugarIngredientsImage,
    color: '#005163'
  },
];

export default videoFlavorsData;
import oneBoxOfCookieImage from '../../../assets/cookie-boxes/1_box_cookies.png';
import threeBoxesOfCookieImage from '../../../assets/cookie-boxes/3_boxes_cookies.png';
import sixBoxesOfCookieImage from '../../../assets/cookie-boxes/6_boxes_cookies.png';
import chocolateCookieImage from '../../../assets/cookie-flavors/chocolate_cookie.jpeg';
import chocolateIngredientsImage from '../../../assets/cookie-ingredients/chocolate_ingredients.png';
import oatmealCookieImage from '../../../assets/cookie-flavors/oatmeal_raisin_cookie.png';
import oatmealIngredientsImage from '../../../assets/cookie-ingredients/oatmeal_ingredients.png';
import sugarCookieImage from '../../../assets/cookie-flavors/sugar_cookie.png';
import sugarIngredientsImage from '../../../assets/cookie-ingredients/sugar_ingredients.png';

const cookieBoxesData = [
  {
    title: '1 Box Of Naked Cookies',
    currPrice: 29.99,
    prevPrice: null,
    additionalText: 'Usually $45.99',
    description: null,
    bottomText: 'Rated a perfect 5 stars',
    isWithBonus: false,
    cover: oneBoxOfCookieImage,
    boxes: [
      {
        flavor: ''
      }
    ],
    id: 0
  },
  {
    title: '3 Boxes Of Naked Cookies',
    currPrice: 82.99,
    prevPrice: 89.97,
    additionalText: `Save $${(89.97 - 82.99).toFixed(2)}!`,
    description: 'Most Popular',
    bottomText: 'FREE Shipping',
    isWithBonus: true,
    cover: threeBoxesOfCookieImage,
    boxes: [
      {
        flavor: ''
      },
      {
        flavor: ''
      },
      {
        flavor: ''
      }
    ],
    id: 1
  },
  {
    title: '6 Boxes Of Naked Cookies',
    currPrice: 159.99,
    prevPrice: 179.94,
    additionalText: `Save $${(179.94 - 159.99).toFixed(2)}!`,
    description: 'Best Value',
    bottomText: 'FREE Shipping + FREE Box OF Cookies',
    isWithBonus: true,
    cover: sixBoxesOfCookieImage,
    boxes: [
      {
        flavor: ''
      },
      {
        flavor: ''
      },
      {
        flavor: ''
      },
      {
        flavor: ''
      },
      {
        flavor: ''
      },
      {
        flavor: ''
      },
    ],
    id: 2
  }
];

const cookieFlavorsData = [
  {
    title: 'Chocolate Chip Cookies',
    name: 'chocolate',
    cover: chocolateCookieImage,
    ingredients: chocolateIngredientsImage,
    color: '#5B3D3F'
  },
  {
    title: 'Oatmeal Raisin Cookies',
    name: 'oatmeal',
    cover: oatmealCookieImage,
    ingredients: oatmealIngredientsImage,
    color: '#903E81'
  },
  {
    title: 'Sugar Cookies',
    name: 'sugar',
    cover: sugarCookieImage,
    ingredients: sugarIngredientsImage,
    color: '#005163'
  },
];

export {
  cookieBoxesData,
  cookieFlavorsData
};
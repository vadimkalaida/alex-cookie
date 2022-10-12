const getCheckoutLink = (boxesArr) => {
  let productsObj = {
    chocolate: {
      num: 0,
      id: '39820802261086'
    },
    oatmeal: {
      num: 0,
      id: '39555877634142'
    },
    sugar: {
      num: 0,
      id: '39555877240926'
    },
  };

  let locationSplit = window.location.href.split('/');
  let linkToReturn = locationSplit[0] + '//' + locationSplit[2] + '/cart/';

  for(let i = 0; i < boxesArr.length; i++) {
    if(productsObj[boxesArr[i].name]) {
      productsObj[boxesArr[i].name].num += 1;
    }
  }

  for(const key in productsObj) {
    if(productsObj[key].num > 0) {
      linkToReturn += `${ productsObj[key].id }:${ productsObj[key].num },`;
    }
  }

  if(linkToReturn[linkToReturn.length - 1] === ',') linkToReturn = linkToReturn.slice(0, -1);

  linkToReturn += "?";

  return linkToReturn;
};

export default getCheckoutLink;
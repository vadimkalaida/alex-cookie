const moveArrayItem = (from, to, arr) => {
  let arrToReturn = [...arr];

  if(to === from || to === null || from === null) return arrToReturn;

  let itemToMove = arrToReturn[from];
  let increment = to < from ? -1 : 1;

  for(let i = from; i !== to; i += increment) {
    arrToReturn[i] = arrToReturn[i + increment];
  }

  arrToReturn[to] = itemToMove;
  return arrToReturn;
};

export {
  moveArrayItem
};
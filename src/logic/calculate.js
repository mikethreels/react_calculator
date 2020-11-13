const Calculate(object, buttonName) {
  let { total, next, operation } = object
  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      break;
    case '+/-':
      total *= 1;
      next *=1;
      break
    case 
    default:
      break;
  }
}

export default Calculate;
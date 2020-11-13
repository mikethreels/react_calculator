import Operate from './operate';

const Calculate = ((object, buttonName) => {
  let { total, next, operation } = object;
  const operator = /[x,+,÷,-]/;
  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '%':
      total /= 100;
      break;
    case operator.includes(buttonName):
      if (operation && next) {
        total = Operate(total, next, operation);
      } else {
        operation = buttonName;
      }
      break;
    case '.':
      if (operation) {
        next = next ? `${next}.` : '0.';
      } else {
        total = total ? `${total}.` : '0.';
      }
      break;
    case '=':
      if (operation && next) {
        total = Operate(total, next, operation);
      }
      break;
    default:
      if (operation && total) {
        next = next ? next + buttonName : buttonName;
      } else {
        total = total ? total + buttonName : buttonName;
      }
      break;
  }
});

export default Calculate;

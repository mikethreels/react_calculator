import Operate from './operate';

const Calculate = ((object, buttonName) => {
  let { total, next, operation } = object;
  const operator = /[X,+,÷,-]/;
  total = total === 'Err div by 0' ? null : total;
  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total = total == null ? total : Operate(total, -1, 'X');
      next = next == null ? next : Operate(-1, next, 'X');
      break;
    case '%':
      total = Operate(total, 100, '÷');
      break;
    case operator.test(buttonName) && buttonName:
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
        next = null;
        operation = null;
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

  return {
    total,
    next,
    operation,
  };
});

export default Calculate;

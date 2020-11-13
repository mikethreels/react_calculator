import Big from 'big.js';

export default function Operate(numberOne, numberTwo, operation) {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);
  let result;
  switch (operation) {
    case '+':
      result = numOne.plus(numTwo);
      break;
    case '-':
      result = numOne.minus(numTwo);
      break;
    case '*':
      result = numOne.times(numTwo);
      break;
    case '÷':
      result = numOne.div(numTwo);
      break;
    default:
      break;
  }
  return result;
}

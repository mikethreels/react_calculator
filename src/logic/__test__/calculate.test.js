import Calculate from '../calculate';

test('2. Number(0-9) button press', () => {
  const object = {
    total: '',
    next: '',
    operation: '',
  };
  let buttonName = '9';
  let result = Calculate(object, buttonName);
  expect(result.total).toBe('9');
  buttonName = '8';
  result = Calculate(result, buttonName);
  expect(result.total).toBe('98');
});

test('3. Dot button press', () => {
  const calculatorObj = {
    total: '',
    next: '',
    operation: '',
  };
  let buttonName = '9';
  let result = Calculate(calculatorObj, buttonName);
  buttonName = '.';
  result = Calculate(result, buttonName);
  buttonName = '8';
  result = Calculate(result, buttonName);
  expect(result.total).toBe('9.8');
  expect(result.total).not.toBe('98');
});

test('5. Operator button press when next is filled', () => {
  const calculatorObj = {
    total: '9',
    next: '',
    operation: '',
  };
  let buttonName = '+';
  let result = Calculate(calculatorObj, buttonName);
  buttonName = '5';
  result = Calculate(result, buttonName);
  buttonName = '4';
  result = Calculate(result, buttonName);
  expect(result.next).toBe('54');
  expect(result.operation).toBe('+');
  expect(result.total).toBe('9');
});

test('6. AC button clears everything', () => {
  const calculatorObj = {
    total: '9',
    next: '5',
    operation: '-',
  };
  const buttonName = 'AC';
  const result = Calculate(calculatorObj, buttonName);
  expect(result.next).toBe(null);
  expect(result.operation).toBe(null);
  expect(result.total).toBe(null);
});

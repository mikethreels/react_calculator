import Operate from '../operate';

test('1. Plus(+) operation', () => {
  const result = Operate('1', '2', '+');
  expect(result).toBe('3');
});

test('2. Minus(-) operation', () => {
  const result = Operate('2', '1', '-');
  expect(result).toBe('1');
});

test('3. Multiplication(X) operation', () => {
  const result = Operate('6', '2', 'X');
  expect(result).toBe('12');
});

test('4. Division(/) operation', () => {
  const result = Operate('6', '3', '÷');
  expect(result).toBe('2');
});

test('5. Division by zero', () => {
  const result = Operate('1', '0', '÷');
  expect(result).toBe('Err div by 0');
});

import { StringCalculator } from '../src/Calculator';
/**
 * calculator.calculate("1") => 1
 * calculator.calculate('') => 0
 * calculator.calculate('1,2') => 3
 * calculator.calculate('1,2,3') => 6
 * calculator.calculate('1,2\n3') =>6
 * calculator.calculate('//;\n1;2') => 3
 * calculator.calculate('a') => 0
 * calculator.calculate('2,3,a,4') =>9
 * check calculator with escaped characters
 */

describe('String calculator should ', () => {
  let calculator: StringCalculator;
  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it('give back the same number', () => {
    expect(calculator.calculate('1')).toBe(1);
    expect(calculator.calculate('2')).toBe(2);
  });

  it('give back 0 for empty string', () => {
    expect(calculator.calculate('')).toBe(0);
  });

  it('add two numbers', () => {
    expect(calculator.calculate('1,2')).toBe(3);
  });

  it('add more than two numbers', () => {
    expect(calculator.calculate('1,2,3')).toBe(6);
    expect(calculator.calculate('6,9,11')).toBe(26);
  });

  it('accept \n as delimiter', () => {
    expect(calculator.calculate('1\n2,3')).toBe(6);
    expect(calculator.calculate('6,9\n11')).toBe(26);
  });

  it('accept strings started with //[delimiter]\n as new delimiter', () => {
    expect(calculator.calculate('//;\n2;3')).toBe(5);
    expect(calculator.calculate('//ç\n2ç3ç5ç3')).toBe(13);
  });

  it('ignore letters', () => {
    expect(calculator.calculate('2,3,a,4')).toBe(9);
  });
});

import { StringCalculator } from '../src/StringCalculator';
/**
 * calculator.sum("1") => 1
 */

describe('String calculator should ', () => {
  let calculator: StringCalculator;
  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it('give back the same number', () => {
    expect(calculator.sum('1')).toBe(1);
    expect(calculator.sum('2')).toBe(2);
  });
});

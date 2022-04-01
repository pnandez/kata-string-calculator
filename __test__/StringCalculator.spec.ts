import { StringCalculator } from '../src/Stringcalculator';

describe('String calculator should', () => {
  it('give the same number if there is only one given', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('1')).toBe(1);
  });
});

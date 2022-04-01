import { StringCalculator } from '../src/Stringcalculator';

describe('String calculator should', () => {
  it('give the same number if there is only one given', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('1')).toBe(1);
    expect(calculator.sum('6')).toBe(6);
  });

  it('give zero as result for empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('')).toBe(0);
  });

  it("throw if the input isn't a number", () => {
    const calculator = new StringCalculator();
    expect(() => calculator.sum('abd')).toThrow(/invalid/);
  });

  it('add several numbers separated by commas', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('1,2')).toBe(3);
    expect(calculator.sum('3,4,8,3')).toBe(18);
  });

  it('allow separating by commas and newlines', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('3\n4,8\n3')).toBe(18);
  });

  it('allow different delimiters when string starts with //', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('//|\n3|4|8|3')).toBe(18);
    expect(calculator.sum('//ç\n3ç4ç8ç3')).toBe(18);
  });
});

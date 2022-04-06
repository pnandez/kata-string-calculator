import { StringCalculator } from '../src/Stringcalculator';

/**
 * calculator.sum('1')=> 1
 * calculator.sum('') => 0
 * calculator.sum('a') => Throw exception invalid
 * calculator.sum('1,2') => 3
 * calculator.sum('1\n2') => 3
 * calculator.sum('//ç\n3ç4ç8ç3') => 18
 * calculator.sum('-1,1') => Throw exception negative numbers not allowed. Introduced: -1
 * calculator.sum('//[^][]')
 */
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
    expect(calculator.sum('//^\n3^4^5')).toBe(12);
  });

  it('not allow negatives', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.sum('-1,1')).toThrow(
      /negative numbers not allowed/,
    );
    expect(() => calculator.sum('//m\n-1,1')).toThrow(
      /negative numbers not allowed/,
    );
  });

  it('ignore numbers over 1000', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('3,4,1003')).toBe(7);
    expect(calculator.sum('//ç\n3ç1004ç8ç3')).toBe(14);
  });

  it('allow delimiters of length greater than 1', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('//[||]\n3||4||8||3')).toBe(18);
    expect(calculator.sum('//[ççç]\n3ççç4ççç8ççç3')).toBe(18);
    expect(calculator.sum('//[^^^^^]\n3^^^^^4^^^^^5')).toBe(12);
  });
  // it('allow more than one different delimiter when starting with // and each delimiter surrounded by []', () => {
  //   const calculator = new StringCalculator();
  //   expect(calculator.sum('//[|][;]\n3|4|8;3')).toBe(18);
  //   expect(calculator.sum('//[^][ç]\n3^4ç5')).toBe(12);
  // });
});

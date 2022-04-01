export class StringCalculator {
  public sum(delimitedNumbersString: string): number {
    if (delimitedNumbersString === '') {
      return 0;
    }
    let delimiters = '[,\\n]';
    if (delimitedNumbersString.startsWith('//')) {
      const end = delimitedNumbersString.indexOf('\n');
      delimiters = delimitedNumbersString.substring(2, end);
      delimitedNumbersString = delimitedNumbersString.substring(end + 1);
    }
    const delimiter = new RegExp('/${delimiters}/');
    const numbers = delimitedNumbersString
      .split(delimiter)
      .map(numberAsString => Number.parseInt(numberAsString));
    if (numbers.some(number => isNaN(number))) {
      throw new Error('invalid string, must contain only numbers');
    }
    return numbers.reduce((a, b) => a + b, 0);
  }
}

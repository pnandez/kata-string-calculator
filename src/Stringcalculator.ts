export class StringCalculator {
  public sum(delimitedNumbersString: string): number {
    if (delimitedNumbersString == '') {
      return 0;
    }
    const delimiter = /[,\n]/;
    const numbers = delimitedNumbersString
      .split(delimiter)
      .map(numberAsString => Number.parseInt(numberAsString));
    if (numbers.some(number => isNaN(number))) {
      throw new Error('invalid string, must contain only numbers');
    }
    return numbers.reduce((a, b) => a + b, 0);
  }
}

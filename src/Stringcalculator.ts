export class StringCalculator {
  public sum(delimitedNumbersString: string): number {
    if (delimitedNumbersString == '') {
      return 0;
    }
    if (isNaN(Number.parseInt(delimitedNumbersString))) {
      throw new Error('invalid string, must contain only numbers');
    }
    return Number.parseInt(delimitedNumbersString);
  }
}

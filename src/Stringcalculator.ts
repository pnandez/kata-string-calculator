export class StringCalculator {
  public sum(delimitedNumbersString: string): number {
    if (delimitedNumbersString == '') {
      return 0;
    }
    return Number.parseInt(delimitedNumbersString);
  }
}

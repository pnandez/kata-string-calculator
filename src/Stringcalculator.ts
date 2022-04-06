const regularExpressionEscapedCharacters = '[]{}()\\.^$*+?|';

export class StringCalculator {
  public sum(delimitedNumbersString: string): number {
    if (delimitedNumbersString === '') {
      return 0;
    }
    let rawDelimiters = ',\\n';
    if (delimitedNumbersString.startsWith('//')) {
      const end = delimitedNumbersString.indexOf('\n');
      rawDelimiters = delimitedNumbersString.substring(2, end);
      rawDelimiters = this.escapeRegularExpressionCharacters(rawDelimiters);
      delimitedNumbersString = delimitedNumbersString.substring(end + 1);
    }
    let delimiter = new RegExp(`[${rawDelimiters}]`, 'g');

    if (rawDelimiters.includes('[')) {
      const delimiters: string[] = rawDelimiters
        .split('[')
        .map(element => element.replace(']', ''));
      delimiter = new RegExp(`[${delimiters.join('')}]`);
      console.log(delimiter);
    }
    const numbers = delimitedNumbersString
      .split(delimiter)
      .map(numberAsString => Number.parseInt(numberAsString));
    if (numbers.some(number => number < 0)) {
      throw new Error(
        'Invalid numbers, negative numbers not allowed: ' +
          numbers.filter(number => number < 0).join(','),
      );
    }
    if (numbers.some(number => isNaN(number))) {
      throw new Error('invalid string, must contain only numbers');
    }
    return numbers.filter(number => number < 1000).reduce((a, b) => a + b, 0);
  }

  private escapeRegularExpressionCharacters(rawDelimiters: string): string {
    return rawDelimiters.replace(/[.*+\-?^${}()|\\]/g, '\\$&');
  }
}

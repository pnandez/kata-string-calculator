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
    const delimiter = new RegExp(`[${rawDelimiters}]`);
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
    const charactersToEscapeInRawDelimiters = rawDelimiters
      .split('')
      .filter(c => regularExpressionEscapedCharacters.includes(c));
    for (let i = 0; i < charactersToEscapeInRawDelimiters.length; i++) {
      const index = rawDelimiters.indexOf(charactersToEscapeInRawDelimiters[i]);
      rawDelimiters =
        rawDelimiters.substring(0, index) +
        '\\' +
        rawDelimiters.substring(index, rawDelimiters.length);
    }
    return rawDelimiters;
  }
}

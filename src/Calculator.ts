export class StringCalculator {
  calculate(expression: string): number {
    let numbers: string[] = this.extractNumbers(expression);
    numbers = this.cleanNumbersArray(numbers);
    const negativeNumbers: string[] = this.checkForNegatives(numbers);
    return this.sum(numbers);
  }

  private checkForNegatives(numbers: string[]): string[] {
    if (isNaN(parseInt(numbers[numbers.length - 1]))) {
      numbers.pop();
    }
    return [];
  }

  private cleanNumbersArray(numbers: string[]): string[] {
    if (numbers.length === 0) {
      return [];
    }
    if (isNaN(parseInt(numbers[numbers.length - 1]))) {
      numbers.pop();
      return this.cleanNumbersArray(numbers);
    }
    const lastElement: string = numbers.pop();
    return this.cleanNumbersArray(numbers).push(lastElement);
  }

  private extractNumbers(expression: string): string[] {
    if (expression.length === 0) {
      return [];
    }
    let delimiters = /[,\n]/;
    let rawDelimiter = ',';
    if (expression.startsWith('//')) {
      rawDelimiter = expression.slice(2, expression.indexOf('\n'));
      delimiters = new RegExp(`[${rawDelimiter}]`, 'g');
      expression = expression.substring(
        expression.indexOf('\n') + 1,
        expression.length,
      );
    }
    return expression.split(delimiters);
  }

  private sum(numbers: string[]): number {
    if (numbers.length === 0) {
      return 0;
    }
    console.log(numbers);
    if (isNaN(parseInt(numbers[numbers.length - 1]))) {
      numbers.pop();
      return this.sum(numbers);
    }
    if (numbers.length === 1) {
      return parseInt(numbers[0]);
    }
    const lastElement: string = numbers.pop();
    return this.sum(numbers) + parseInt(lastElement);
  }
}

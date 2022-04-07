export class StringCalculator {
  calculate(expression: string): number {
    const numbers: string[] = this.extractNumbers(expression);
    return this.sum(numbers);
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

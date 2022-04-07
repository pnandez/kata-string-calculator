export class StringCalculator {
  calculate(expression: string): number {
    const numbers: string[] = this.extractNumbers(expression);
    console.log(expression + ' => ' + `[${numbers}]`);
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
      console.log(delimiters);
      expression = expression.substring(
        expression.indexOf('\n') + 1,
        expression.length,
      );
    }
    console.log(expression);
    return expression.split(delimiters);
  }

  private sum(numbers: string[]): number {
    if (numbers.length === 0) {
      return 0;
    }
    if (numbers.length === 1) {
      return parseInt(numbers[0]);
    }
    const lastElement: string = numbers.pop();
    return this.sum(numbers) + parseInt(lastElement);
  }
}

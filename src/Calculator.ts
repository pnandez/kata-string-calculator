export class StringCalculator {
  calculate(expression: string): number {
    const numbers: string[] = this.extractNumbers(expression);
    const copyOfNumbers = [...numbers];
    const negativeNumbers = this.checkForNegatives(copyOfNumbers);
    console.log(negativeNumbers);
    if (negativeNumbers.length > 0) {
      throw new Error(
        'Negative numbers are not allowed ' + negativeNumbers.join(', '),
      );
    }
    return this.sum(numbers);
  }

  private checkForNegatives(numbers: string[]): string[] {
    if (numbers.length === 0) {
      console.log('BASE CASE');
      return [];
    }
    const lastNumber: string = numbers.pop();
    console.log(lastNumber);
    if (parseInt(lastNumber) < 0) {
      console.log('INSIDE');
      return [lastNumber].concat(this.checkForNegatives(numbers));
    }
    return [].concat(this.checkForNegatives(numbers));
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

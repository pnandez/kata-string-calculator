/* eslint-disable prettier/prettier */
export class StringCalculator {
  calculate(expression: string): number {
    const numbers: string[] = this.extractNumbers(expression);
    const copyOfNumbers = [...numbers];
    const negativeNumbers = this.checkForNegatives(copyOfNumbers);
    if (negativeNumbers.length > 0) {
      throw new Error(
        'Negative numbers are not allowed ' + negativeNumbers.join(', '),
      );
    }
    return this.sum(numbers);
  }

  private checkForNegatives(numbers: string[]): string[] {
    if (numbers.length === 0) {
      return [];
    }
    const lastNumber: string = numbers.pop();
    if (parseInt(lastNumber) < 0) {
      return [lastNumber].concat(this.checkForNegatives(numbers));
    }
    return [].concat(this.checkForNegatives(numbers));
  }

  private extractNumbers(expression: string): string[] {
    if (expression.length === 0) {
      return [];
    }
    let delimeters = /[,\n]/;
    let rawdelimeter = ',';
    if (expression.startsWith('//')) {
      rawdelimeter = expression.slice(2, expression.indexOf('\n'));
      delimeters = new RegExp(`[${this.parsedelimeters(rawdelimeter)}]`, 'g');
      console.log(delimeters);
      expression = expression.substring(
        expression.indexOf('\n') + 1,
        expression.length,
      );
    }
    return expression.split(delimeters);
  }

  private parsedelimeters(rawdelimeterExpression: string): string {
    if (rawdelimeterExpression.length === 1) {
      return rawdelimeterExpression;
    }
    console.log('PARSEDELIMITER ' +rawdelimeterExpression);
    const delimeters: string[] = rawdelimeterExpression.match(/\[.*?\]/g);
    console.log('PARSEDELIMITer 2 =' + delimeters);
    return this.parseMultipleDelimeters(delimeters);
  }

  private parseMultipleDelimeters(delimeters: string[]): string {
    if (delimeters.length === 1) {
      
      return delimeters[0].slice(1, -1);
    }
    const parseddelimeter = delimeters?.shift()?.slice(1, -1);
    return parseddelimeter + '|' + this.parseMultipleDelimeters(delimeters);
  }

  private sum(numbers: string[]): number {
    if (numbers.length === 0) {
      return 0;
    }
    console.log(numbers);
    if (isNaN(parseInt(numbers[numbers.length - 1]))) {
      throw new Error('Wrong formatted string');
    }
    const lastElement: string = numbers.pop();
    if (parseInt(lastElement) > 1000) {
      return this.sum(numbers);
    }
    return this.sum(numbers) + parseInt(lastElement);
  }
}

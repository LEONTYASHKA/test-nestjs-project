import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(this.calcnumber(1, 2, "")); // error log unknown issue
    console.log(this.calcnumber(1, 2, "+")); // 3
    console.log(this.calcnumber(1, 2, "-")); // -1
    console.log(this.calcnumber(5, 2, "/")); // 2.5
    console.log(this.calcnumber(5, 2, "/*")); // error log unknown issue
    console.log(this.calcnumber(5, 2, "1")); // error log unknown issue
    return 'Hello World!';
  }

  calcnumber(firstNumber: number, secondNumber: number, operatorSign: string): number {
    if (!this.isValidOperatorSign(operatorSign)) {
      console.log("eror");
      return null;
    }
    if (operatorSign[0] == "+") {
      return this.summ(firstNumber, secondNumber);
    }
    if (operatorSign[0] == "-") {
      return this.substruct(firstNumber, secondNumber);
    }
    if (operatorSign[0] == "/") {
      return this.divide(firstNumber, secondNumber);
    }
  }
  /**
   * If operator length is not 1 return false.
   * If Operator is not plus/minus/divide return false
   *
   * @param operatorSign - string to validate operator
   */
  isValidOperatorSign(operatorSign: string): boolean {
    if (operatorSign.length != 1) {
      return false;
    }
    if (operatorSign[0] != "+" && operatorSign[0] != "-" && operatorSign[0] != "/") {
      return false;
    }
    return true;
  }

  summ(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }

  substruct(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
  }

  divide(firstNumber: number, secondNumber: number): number {
    return firstNumber / secondNumber;
  }
}

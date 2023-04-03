import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ADD, DIVIDE, MULTIPLY, SUBTRACT} from "../operation.constants";

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  input: BehaviorSubject<any> = new BehaviorSubject<any>(0)
  computed: BehaviorSubject<any> = new BehaviorSubject<any>('');

  /**
   * Update the display
   * @param operator
   */
  operate(operator: string): void {
    if (!operator) return;
    if (operator === '=') {
      this.displayAnswer()
    } else {
      let val = this.input.value;
      const val2 = this.computed.value;
      if (val !== null && val !== 0) {
        console.log(val2)
        if (val.length > 8) {
          val = Number.parseFloat(val).toExponential(2).trim();
        }
        this.computed.next(val2 + val + " " + operator + " ")
        this.input.next(null)
      } else if (val2 !== null) {
        const s = val2.trim()
        this.computed.next(s.substring(0, s.length - 1) + " " + operator + " ")
      }
    }
  }

  /**
   * Do calculations and display results on screen
   */
  displayAnswer() {
    if (!this.computed.value) return;
    const answer = this.calculate(this.computed.value + this.input.value);
    let n: any = '';
    if (answer && Number.isInteger(answer) && String(answer).length > 8) {
      n = (answer).toExponential(3);
      Number.isInteger(answer)
    } else if (!Number.isInteger(answer)) {
      n = answer?.toFixed(4);
    } else {
      n = answer;
    }
    this.input.next(n);
  }

  /**
   * BODMAS rule calculation
   * @param screen
   */
  calculate(screen: string) {
    if (screen.length === 0) return;
    let arr = screen.split(' ');
    let ans = 0;

    // Perform all divisions
    for (let i = 0; i < arr.length; i++) {
      let ch = arr[i];
      let left = parseFloat(arr[i - 1]);
      let right = parseFloat(arr[i + 1]);

      if (ch === DIVIDE) {
        arr[i - 1] = String(left / right);
        arr.splice(i, 2);
      }
    }

    // Perform all multiplications
    for (let j = 0; j < arr.length; j++) {
      let left = parseFloat(arr[j - 1]);
      let right = parseFloat(arr[j + 1]);

      if (arr[j] === MULTIPLY) {
        arr[j - 1] = String(left * right);
        arr.splice(j, 2);
      }
    }

    ans = parseFloat(arr[0]);

    // Perform additions & subtractions
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i] == ADD) {
        ans = ans + parseFloat(arr[i + 1]);
      } else if (arr[i] == SUBTRACT) {
        ans = ans - parseFloat(arr[i + 1]);
      }
    }

    return ans;
  }
}

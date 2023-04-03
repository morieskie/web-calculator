import {Component, OnDestroy, OnInit} from '@angular/core';
import {DisplayService} from "../display/display.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit, OnDestroy {

  entries: any[] = [];

  subscription: Subscription | undefined;

  constructor(private displayService: DisplayService) {
  }

  ngOnInit(): void {
    this.subscription = this.displayService.computed.subscribe(() => this.entries = []);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onOperate = (operator: string) => this.displayService.operate(operator);

  onEquals = () => this.displayService.displayAnswer();

  addDot(): void {
    if (this.entries.indexOf('.') !== -1) return;
    this.entries?.push('.');
  }

  onEntry(n: string | number): void {
    if (this.entries.length > 7) return;
    this.entries?.push(n);
    let input = this.entries?.join('');
    this.displayService.input.next(+input)
  }

  onReset(): void {
    if (this.entries.length === 0) {
      this.displayService.computed.next(null);
    }
    this.displayService.input.next(null);
    this.entries = [];
  }

  onDelete() {
    this.entries.pop();
    if (this.entries.length === 0) this.displayService.computed.next(null)
    this.displayService.input.next(+this.entries?.join(''))
  }
}

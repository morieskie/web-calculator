import {Component, OnDestroy} from '@angular/core';
import {DisplayService} from "./display.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnDestroy {

  main: Observable<string>;
  sec: Observable<string>;


  constructor(private displayService: DisplayService) {
    this.main = displayService.input.asObservable()
    this.sec = displayService.computed.asObservable()
  }

  ngOnDestroy(): void {
  }
}

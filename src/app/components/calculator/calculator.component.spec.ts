import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {CalculatorComponent} from './calculator.component';
import {CalculatorModule} from "./calculator.module";
import {DisplayService} from "./display/display.service";

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let displayService: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [CalculatorModule],
      providers: [DisplayService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    displayService = fixture.debugElement.injector.get(DisplayService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add correctly', fakeAsync(() => {
    const btnTwo = fixture.debugElement.nativeElement.querySelector('#btnTwo');
    const operation = fixture.debugElement.nativeElement.querySelector('#btnPlus');
    const equals = fixture.debugElement.nativeElement.querySelector('#btnEquals');
    if (btnTwo) {
      btnTwo.click();
      expect(displayService.input.value).toEqual(2)
      operation.click();
      expect(displayService.input.value).toEqual(null)
      btnTwo.click();
      expect(displayService.input.value).toEqual(2)
      equals.click();
      expect(displayService.input.value).toEqual(4);
    }
  }));

  it('should subtract correctly', fakeAsync(() => {
    const btnTwo = fixture.debugElement.nativeElement.querySelector('#btnTwo');
    const operation = fixture.debugElement.nativeElement.querySelector('#btnMinus');
    const equals = fixture.debugElement.nativeElement.querySelector('#btnEquals');
    if (btnTwo) {
      btnTwo.click();
      expect(displayService.input.value).toEqual(2)
      operation.click();
      expect(displayService.input.value).toEqual(null)
      btnTwo.click();
      expect(displayService.input.value).toEqual(2)
      equals.click();
      expect(displayService.input.value).toEqual(0);
    }
  }));

  it('should multiply correctly', fakeAsync(() => {
    const btnTwo = fixture.debugElement.nativeElement.querySelector('#btnTwo');
    const operation = fixture.debugElement.nativeElement.querySelector('#btnMultiply');
    const equals = fixture.debugElement.nativeElement.querySelector('#btnEquals');
    if (btnTwo) {
      btnTwo.click();
      expect(displayService.input.value).toEqual(2)
      operation.click();
      expect(displayService.input.value).toEqual(null)
      btnTwo.click();
      expect(displayService.input.value).toEqual(2)
      equals.click();
      expect(displayService.input.value).toEqual(4);
    }
  }));

  it('should divide correctly', fakeAsync(() => {
    const btnTwo = fixture.debugElement.nativeElement.querySelector('#btnTwo');
    const operation = fixture.debugElement.nativeElement.querySelector('#btnDivide');
    const equals = fixture.debugElement.nativeElement.querySelector('#btnEquals');
    if (btnTwo) {
      btnTwo.click();
      expect(displayService.input.value).toEqual(2)
      operation.click();
      expect(displayService.input.value).toEqual(null)
      btnTwo.click();
      expect(displayService.input.value).toEqual(2)
      equals.click();
      expect(displayService.input.value).toEqual(1);
    }
  }));

  it('should update display correctly', fakeAsync(() => {
    const btnTwo = fixture.debugElement.nativeElement.querySelector('#btnTwo');
    const display = fixture.debugElement.nativeElement.querySelector('#inputDisplay');
    if (btnTwo && display) {
      btnTwo.click();
      expect(displayService.input.value).toEqual(2);
      fixture.detectChanges();
      fixture.whenStable().then(()=> {
        expect(display.innerHTML).toEqual('2');
      })

    }
  }));

  it('should update display correctly on multiple button clicks', fakeAsync(() => {
    const btnTwo = fixture.debugElement.nativeElement.querySelector('#btnTwo');
    const display = fixture.debugElement.nativeElement.querySelector('#inputDisplay');
    if (btnTwo && display) {
      btnTwo.click();
      btnTwo.click();
      expect(displayService.input.value).toEqual(22);
      fixture.detectChanges();
      fixture.whenStable().then(()=> {
        expect(display.innerHTML).toEqual('22');
      })

    }
  }));

  it('should clear display when plus, minus, divide or multiply is clicked', fakeAsync(() => {
    const btnTwo = fixture.debugElement.nativeElement.querySelector('#btnTwo');
    const operation = fixture.debugElement.nativeElement.querySelector('#btnDivide');
    const display = fixture.debugElement.nativeElement.querySelector('#inputDisplay');
    if (btnTwo && display) {
      btnTwo.click();
      btnTwo.click();
      expect(displayService.input.value).toEqual(22);
      operation.click();
      fixture.detectChanges();
      fixture.whenStable().then(()=> {
        expect(display.innerHTML).toEqual('');
      })

    }
  }));

  it('should remove input on backspace', fakeAsync(() => {
    const btnTwo = fixture.debugElement.nativeElement.querySelector('#btnTwo');
    const back = fixture.debugElement.nativeElement.querySelector('#btnDel');
    const display = fixture.debugElement.nativeElement.querySelector('#inputDisplay');
    if (btnTwo && display) {
      btnTwo.click();
      btnTwo.click();
      expect(displayService.input.value).toEqual(22);
      back.click();
      fixture.detectChanges();
      fixture.whenStable().then(()=> {
        expect(display.innerHTML).toEqual('2');
      })

    }
  }));

  it('should add dot', fakeAsync(() => {
    const btnTwo = fixture.debugElement.nativeElement.querySelector('#btnTwo');
    const dot = fixture.debugElement.nativeElement.querySelector('#btnDot');
    const display = fixture.debugElement.nativeElement.querySelector('#inputDisplay');
    if (btnTwo && display) {
      btnTwo.click();
      dot.click();
      btnTwo.click();
      expect(displayService.input.value).toEqual(2.2);

    }
  }));

});

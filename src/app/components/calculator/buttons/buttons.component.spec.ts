import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {ButtonsComponent} from './buttons.component';
import {DisplayService} from "../display/display.service";
import {FormsModule} from "@angular/forms";

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsComponent],
      providers: [DisplayService, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be clickable', fakeAsync(() => {
    const btnTwo = fixture.debugElement.nativeElement.querySelector('#btnTwo');
    const btnTwo2 = fixture.debugElement.nativeElement.querySelector('#btnTwo');
    const multiple = fixture.debugElement.nativeElement.querySelector('#btnMultiply');
    const equals = fixture.debugElement.nativeElement.querySelector('#btnEquals');
    if (btnTwo) {
      let displayService = fixture.debugElement.injector.get(DisplayService);
      btnTwo.click();
      multiple.click();
      expect(displayService.input.value).toEqual(null)
      btnTwo2.click();
      expect(displayService.input.value).toEqual(2)
      equals.click();
      expect(displayService.input.value).toEqual(4);
    }
    expect(btnTwo?.textContent).toContain('2');
  }));
});

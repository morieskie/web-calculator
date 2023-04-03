import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { DisplayComponent } from './display/display.component';
import { CalculatorComponent } from './calculator.component';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
    declarations: [
        DisplayComponent,
        CalculatorComponent,
        ButtonsComponent
    ],
    exports: [
      DisplayComponent,
      CalculatorComponent,
      ButtonsComponent
    ],
    imports: [
        CommonModule,
        CalculatorRoutingModule
    ]
})
export class CalculatorModule { }

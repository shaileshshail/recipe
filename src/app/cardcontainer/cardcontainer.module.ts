import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardcontainerComponent } from './cardcontainer.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardcontainerComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardcontainerModule { }

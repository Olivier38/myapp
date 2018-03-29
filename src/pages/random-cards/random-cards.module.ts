import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandomCardsPage } from './random-cards';

@NgModule({
  declarations: [
    RandomCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(RandomCardsPage),
  ],
})
export class RandomCardsPageModule {}

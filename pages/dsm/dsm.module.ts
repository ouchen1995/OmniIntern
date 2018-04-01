import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DsmPage } from './dsm';

@NgModule({
  declarations: [
    DsmPage,
  ],
  imports: [
    IonicPageModule.forChild(DsmPage),
  ],
})
export class DsmPageModule {}

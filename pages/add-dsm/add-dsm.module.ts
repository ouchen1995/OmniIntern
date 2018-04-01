import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDsmPage } from './add-dsm';

@NgModule({
  declarations: [
    AddDsmPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDsmPage),
  ],
})
export class AddDsmPageModule {}

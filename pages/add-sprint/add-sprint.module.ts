import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSprintPage } from './add-sprint';

@NgModule({
  declarations: [
    AddSprintPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSprintPage),
  ],
})
export class AddSprintPageModule {}

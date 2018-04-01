import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddUserStoryPage } from './add-user-story';

@NgModule({
  declarations: [
    AddUserStoryPage,
  ],
  imports: [
    IonicPageModule.forChild(AddUserStoryPage),
  ],
})
export class AddUserStoryPageModule {}

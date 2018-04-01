import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SprintListService } from '../../services/sprint-list/sprint-list.service';
import { Sprint } from '../../models/sprint.model';
import { FormBuilder } from '@angular/forms';

/**
 * Generated class for the AddSprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-sprint',
  templateUrl: 'add-sprint.html',
})
export class AddSprintPage {

  Sp : Sprint = {
    ProjectKey : '',
    Num : undefined ,
    Disc : '' ,
    PointToDo : undefined ,
    PointDoi : undefined ,
    DateBegin : undefined,
    DateFinish : undefined ,
    Duration : undefined 

  }

  constructor(public formBuilder: FormBuilder ,public navCtrl: NavController, public navParams: NavParams , private S : SprintListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSprintPage');
  }

  AddSprint(S : Sprint)
  {
    this.S.addSprinttem(S).then (ref => {
      this.navCtrl.setRoot('SprintPage',{key :ref.key})
    }

    )
  }
}

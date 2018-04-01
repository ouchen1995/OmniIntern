import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Sprint } from '../../models/sprint.model';
import { SprintListService } from '../../services/sprint-list/sprint-list.service';

/**
 * Generated class for the SprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sprint',
  templateUrl: 'sprint.html',
})
export class SprintPage {
  Sprints$: Observable<Sprint[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sprint: SprintListService) {
    this.Sprints$ = this.sprint.getSprintList().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.val, ...c.payload.val(),
        }))
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SprintPage');
  }


}


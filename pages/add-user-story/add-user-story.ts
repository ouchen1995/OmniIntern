import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserStory } from '../../models/UserStory.model';
import { BacklogListService } from '../../services/backlog-list/backlog-list.service';

/**
 * Generated class for the AddUserStoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user-story',
  templateUrl: 'add-user-story.html',
})
export class AddUserStoryPage {

  US: UserStory = {
    PorjectKey: '',
    Name: undefined,
    Disc: undefined,
    IPoint: undefined,
    HPoint: undefined,

  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private USS: BacklogListService) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserStoryPage');

  }

  AddUserStory(Us: UserStory) {
    this.USS.addBacklogitem(Us).then(ref => {
      this.navCtrl.setRoot('BacklogBisPage', { key: ref.key })
    }

    )



  }
}
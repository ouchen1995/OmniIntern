import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Dsm } from '../../models/dsm.model';
import { BacklogListService } from '../../services/backlog-list/backlog-list.service';

/**
 * Generated class for the BacklogBisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backlog-bis',
  templateUrl: 'backlog-bis.html',
})
export class BacklogBisPage {
  UserStory$ : Observable<Dsm[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private bakclog : BacklogListService) {
    this.UserStory$  = this.bakclog.getBacklogList().snapshotChanges().map(
      changes => {return changes.map(c=> ({
     key: c.payload.val ,...c.payload.val(),
   }))
   })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BacklogBisPage');
  }
 
  

}
 

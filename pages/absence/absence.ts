import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Absence } from '../../models/Abs.model.1';
import { Observable } from 'rxjs/Observable';
import { AbsListService } from '../../services/Abs-list/Abs-list.service';

/**
 * Generated class for the AbsencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-absence',
  templateUrl: 'absence.html',
})
export class AbsencePage {
  Abs$ : Observable<Absence[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private Absence : AbsListService) {
    this.Abs$ = this.Absence.getAbsList().snapshotChanges().map(
      changes => {return changes.map(c=> ({
     key: c.payload.val ,...c.payload.val(),
   }))
   })
  }
  
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbsencePage');
  }

}

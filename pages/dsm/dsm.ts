import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Dsm } from '../../models/dsm.model';
import { dsmListService } from '../../services/dsm-list/dsm-list.service';

/**
 * Generated class for the DsmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dsm',
  templateUrl: 'dsm.html',
})
export class DsmPage {
  DsmList$: Observable<Dsm[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private DsmList: dsmListService) {
    this.DsmList$ = this.DsmList.getDsmList().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.val, ...c.payload.val(),
        }))
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DsmPage');
  }





}


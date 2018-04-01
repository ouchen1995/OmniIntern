import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dsm } from '../../models/dsm.model';
import { dsmListService } from '../../services/dsm-list/dsm-list.service';

/**
 * Generated class for the AddDsmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-dsm',
  templateUrl: 'add-dsm.html',
})
export class AddDsmPage {

  D: Dsm = {
    ProjectKey: '',
    Disc: '',
    Date: undefined,
    PointFi: undefined,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private Ds: dsmListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDsmPage');
  }

  AddDsm(Ds: Dsm) {
    this.Ds.addDsmitem(Ds).then(ref => {
      this.navCtrl.setRoot('DsmPage', { key: ref.key })
    }

    )


  }
}

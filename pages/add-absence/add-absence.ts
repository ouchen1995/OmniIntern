import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbsListService } from '../../services/Abs-list/Abs-list.service';
import { Absence } from '../../models/Abs.model.1';

/**
 * Generated class for the AddAbsencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-absence',
  templateUrl: 'add-absence.html',
})
export class AddAbsencePage {

  AB : Absence = {
    Disc : '',
    DateD : undefined,
    DateF : undefined,
    Name : '',
    Type : '',
    DateDD : undefined,
    DateDF : undefined,

    
  }
  constructor(public navCtrl: NavController, public navParams: NavParams ,private bS :AbsListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAbsencePage');
  }

  AddAbsence(bS : Absence)
  {
    this.bS.addAbsitem(bS).then (ref => {
      this.navCtrl.setRoot('AbsencePage',{key :ref.key})
    }

    )
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProjectListService } from '../../services/project-list/project-list.service';
import { Project } from '../../models/project.model';

/**
 * Generated class for the AddProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})
export class AddProjectPage {

  project: Project = {
    Name: '',
    Head: '',
    Disc: '',
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private p: ProjectListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProjectPage');
  }

  AddProject(P: Project) {
    this.p.addProjectitem(P).then(ref => {
      this.navCtrl.setRoot('ProjectsPage', { key: ref.key })
    }

    )
  }

}

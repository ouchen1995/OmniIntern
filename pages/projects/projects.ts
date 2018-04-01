import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectListService } from '../../services/project-list/project-list.service';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { Project } from '../../models/project.model';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
   pros$ : Observable<Project[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private projects : ProjectListService )
   {
  
  this.pros$ = this.projects.getProjectList().snapshotChanges().map(
     changes => {return changes.map(c=> ({
    key: c.payload.val ,...c.payload.val(),
  }))
  })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }
}

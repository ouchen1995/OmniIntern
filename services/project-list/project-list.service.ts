import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import {BacklogBisPage} from "../../pages/backlog-bis/backlog-bis";
import { Project } from "../../models/project.model";

@Injectable()
export class ProjectListService {
  private ProjectListRef = this.db.list<Project>('Plist');
  constructor (private db :AngularFireDatabase){}

  getProjectList()
  {
        return this.ProjectListRef;
  } 

  addProjectitem(PL: Project )
  {
     return this.ProjectListRef.push(PL);
  }



} 
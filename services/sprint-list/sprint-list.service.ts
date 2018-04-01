import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import {BacklogBisPage} from "../../pages/backlog-bis/backlog-bis";
import { Sprint } from "../../models/sprint.model";

@Injectable()
export class SprintListService {
      private SprintListRef = this.db.list<Sprint>('Sprint');
      constructor (private db :AngularFireDatabase){}

      getSprintList()
      {
            return this.SprintListRef;
      } 

      addSprinttem(Sp : Sprint )
      {
         return this.SprintListRef.push(Sp);
      }

} 
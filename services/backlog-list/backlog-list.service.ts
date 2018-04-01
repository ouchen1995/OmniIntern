import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import {BacklogBisPage} from "../../pages/backlog-bis/backlog-bis";
import { UserStory } from "../../models/UserStory.model";

@Injectable()
export class BacklogListService {
  private BacklogListRef = this.db.list<UserStory>('Backlog');
          constructor (private db :AngularFireDatabase){}

          getBacklogList()
          {
                return this.BacklogListRef;
          } 

          addBacklogitem(US :UserStory )
          {
             return this.BacklogListRef.push(US);
          }



} 
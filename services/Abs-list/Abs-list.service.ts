import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { UserStory } from "../../models/UserStory.model";
import { Absence } from "../../models/Abs.model.1";
import {BacklogBisPage} from "../../pages/backlog-bis/backlog-bis";
@Injectable()

export class AbsListService {
  private AbsListRef = this.db.list<Absence>('Absence');
          constructor (private db :AngularFireDatabase){}

          getAbsList()
          {
                return this.AbsListRef;
          } 

          addAbsitem(Ab :Absence )
          {
             return this.AbsListRef.push(Ab);
          }



} 
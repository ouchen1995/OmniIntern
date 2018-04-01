import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Dsm } from "../../models/dsm.model";
import {BacklogBisPage} from "../../pages/backlog-bis/backlog-bis";

@Injectable()
export class dsmListService { 
      private DsmListRef = this.db.list<Dsm>('DsmList')
          constructor (private db :AngularFireDatabase){}

          getDsmList()
          {
            return this.DsmListRef;
          }

          addDsmitem(DS: Dsm)
          {
            return this.DsmListRef.push(DS);
          }



} 
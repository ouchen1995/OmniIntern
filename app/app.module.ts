import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { FIERBASE_CONFIG } from './firebase.credentials';
import { BacklogListService } from '../services/backlog-list/backlog-list.service';
import { dsmListService } from '../services/dsm-list/dsm-list.service';
import { ProjectListService } from '../services/project-list/project-list.service';
import { SprintListService } from '../services/sprint-list/sprint-list.service';
import { AbsListService } from '../services/Abs-list/Abs-list.service';



@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIERBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BacklogListService,
    dsmListService,
    ProjectListService,
    SprintListService,
    AbsListService,


  ]
})
export class AppModule {}

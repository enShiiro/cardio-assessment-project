import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NearbyPage } from '../pages/nearby/nearby';
import { TimelinePage } from '../pages/timeline/timeline';
import { ChallengesPage } from '../pages/challenges/challenges';
import { TabsPage } from '../pages/tabs/tabs';
import { DataManagerProvider } from '../providers/data-manager/data-manager';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    NearbyPage,
    TimelinePage,
    ChallengesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      // mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    TabsPage,
    TimelinePage,
    NearbyPage,
    ChallengesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataManagerProvider,
    
  ]
})
export class AppModule {}

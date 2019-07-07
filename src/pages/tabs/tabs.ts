import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { TimelinePage } from '../timeline/timeline';
import { NearbyPage } from '../nearby/nearby';
import { ChallengesPage } from '../challenges/challenges';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = TimelinePage;
  tab3Root = NearbyPage;
  tab4Root = ChallengesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

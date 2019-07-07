import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChallengeDataDto } from '../../model/dto';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';

/**
 * Generated class for the ChallengesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-challenges',
  templateUrl: 'challenges.html',
})
export class ChallengesPage {

  challengeList: ChallengeDataDto[] = [];
  filteredDataList: ChallengeDataDto[] = [];
  levelChallenges: Number = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _dataMgr: DataManagerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChallengesPage');
    this.challengeList = this._dataMgr.getChallengesData();
    this.filteredDataList = this.challengeList;

    this.onLevelChallengesChanges(this.levelChallenges);

  }
  onFilterData(filter) {
    if (filter) {
      this.filteredDataList = this.challengeList.filter((filteredData) => {

        return filteredData.title.toLowerCase().indexOf(filter.toLowerCase()) > -1;
      })
    } else {
      this.onLevelChallengesChanges(this.levelChallenges);
    }

  }
  onLevelChallengesChanges(level) {

    let levelDesc = this._getLevelDesc(level);

    this.filteredDataList = this.challengeList.filter((filteredData) => {
      if (filteredData.level == levelDesc) {
        return true;
      }
    })
  }

  _getLevelDesc(level) {
    let levelDesc: String = "";

    switch (level) {
      case 1:
        levelDesc = "Beginner";
        break;
      case 2:
        levelDesc = "Intermediate";
        break;
      case 3:
        levelDesc = "Advanced"
        break;
    }
    return levelDesc;
  }
  getFontColorByLevel(level) {

    if (level == 'Beginner') {
      return {
        'color': 'green'
      }
    }
    else if (level == 'Intermediate') {
      return {
        'color': 'yellowgreen'
      }
    }
    else {
      return {
        'color': '#e25252'
      }

    }
  }
}

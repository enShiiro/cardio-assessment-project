import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChallengeDataDto } from '../../model/dto';

/*
  Generated class for the DataManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataManagerProvider {

  //dummy challenges data
  challengesDummyData: ChallengeDataDto[] = [
    {
      title: "500 Calories Run",
      level: "Intermediate",
      caloriesBurn: 500,
      point: 100
    },
    {
      title: "2.4 KM Run",
      level: "Intermediate",
      caloriesBurn: 640,
      point: 100
    },
    {
      title: "1.4 KM Run ",
      level: "Intermediate",
      caloriesBurn: 300,
      point: 130
    },
    {
      title: "1.0 KM Run",
      level: "Beginner",
      caloriesBurn: 200,
      point: 150
    },
    {
      title: "399 Meter Run",
      level: "Beginner",
      caloriesBurn: 80,
      point: 50
    },
    {
      title: "11 Calories Run",
      level: "Advanced",
      caloriesBurn: 500,
      point: 200
    },
    {
      title: "30 Minute Run",
      level: "Advanced",
      caloriesBurn: 500,
      point: 100
    },
    {
      title: "31 Calories Run",
      level: "Advanced",
      caloriesBurn: 500,
      point: 230
    },
    {
      title: "110 Calories Run",
      level: "Advanced",
      caloriesBurn: 700,
      point: 300
    },
  ]
  constructor(public http: HttpClient) {
    console.log('Hello DataManagerProvider Provider');
  }

  getChallengesData(){
    return this.challengesDummyData;
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FirstlyGradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firstly-grade',
  templateUrl: 'firstly-grade.html',
})
export class FirstlyGradePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  GoToFirst()  {
    this.navCtrl.push(FirstlyGradePage );
  }
  GoToSecond()  {
    this.navCtrl.push(FirstlyGradePage);
  }
  GoToThird()  {
    this.navCtrl.push(FirstlyGradePage);
  }
  GoToFourth()  {
    this.navCtrl.push(FirstlyGradePage);
  }
  GoToFifth()  {
    this.navCtrl.push(FirstlyGradePage);
  }
  GoToSixth()  {
    this.navCtrl.push(FirstlyGradePage);
  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController } from 'ionic-angular';

import { FirstYearPage } from '../first-year/first-year';
import { SecondYearPage } from '../second-year/second-year';
import { ThirdYearPage } from '../third-year/third-year';
import { FourthYearPage } from '../fourth-year/fourth-year';
import { FifthYearPage } from '../fifth-year/fifth-year';
import { SixthYearPage } from '../sixth-year/sixth-year';

/**
 * Generated class for the FirstYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first-year',
  templateUrl: 'first-year.html',
})
export class FirstGrades {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public alerCtrl: AlertController) {
  }

 // goTo(pageIndex: number) {
   // let confirm = this.alerCtrl.create({
     //title: 'تنبيه تنزيل مقاطع الفيديو!',
     //message: 'سوف يتم التأكد من مقاطع الفيديو وتحميل ماينقص منها مما قد يستهلك حجم بيانات مرتفع هل انت موافق؟',
     //buttons: [
      // {
        // text: 'لا,غير موافق',
         //handler: () => {
           //console.log('Disagree clicked');
         //}
       //},
       //{
         //text: 'موافق',
         //handler: () => {
          // this.navCtrl.push('GradePage', { 'grade': pageIndex });
           //console.log('Agree clicked');
        // }
      // }
    // ]
   //});
  // confirm.present()
//}

GoToFirst()  {
  this.navCtrl.push(FirstYearPage );
}
GoToSecond()  {
  this.navCtrl.push(SecondYearPage);
}
GoToThird()  {
  this.navCtrl.push(ThirdYearPage);
}
GoToFourth()  {
  this.navCtrl.push(FourthYearPage);
}
GoToFifth()  {
  this.navCtrl.push(FifthYearPage);
}
GoToSixth()  {
  this.navCtrl.push(SixthYearPage);
}


}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



import { FirstYearPage } from '../first-year/first-year';
import { SecondYearPage } from '../second-year/second-year';
import { ThirdYearPage } from '../third-year/third-year';
import { FourthYearPage } from '../fourth-year/fourth-year';
import { FifthYearPage } from '../fifth-year/fifth-year';
import { SixthYearPage } from '../sixth-year/sixth-year';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ,
              public alertCtrl: AlertController) {  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'عن التطبيق',
      subTitle: "تنفيذ:<br/> الاستاذ أحمد موسى الفيفي<br/> الاستاذ عبدالله علي الفيفي<br/> تطوير التطبيق:<br/> زياد محمد العتيبي<br/>ziyad.alotaibe@gmail.com <br/>  عثمان أيمن  <br/>othman.ayman47@gmail.com <br/>  تصميم: <br/>رشا غيلان <br/> R-sh2009@hotmail.com <br/> insta: Designer.k.r  ",
      buttons: ['حسناً']
    });
    alert.present();
  }

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

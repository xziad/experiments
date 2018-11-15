import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { FirstYearPage } from '../pages/first-year/first-year';
import { SecondYearPage } from '../pages/second-year/second-year';
import { ThirdYearPage } from '../pages/third-year/third-year';
import { FourthYearPage } from '../pages/fourth-year/fourth-year';
import { FifthYearPage } from '../pages/fifth-year/fifth-year';
import { SixthYearPage } from '../pages/sixth-year/sixth-year';
 

@NgModule({
  declarations: [
    MyApp,
    HomePage ,
    FirstYearPage ,
    SecondYearPage ,
    ThirdYearPage ,
    FourthYearPage ,
    FifthYearPage ,
    SixthYearPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage ,
    FirstYearPage ,
    SecondYearPage ,
    ThirdYearPage ,
    FourthYearPage ,
    FifthYearPage ,
    SixthYearPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { VideoProvider } from '../providers/video/video';


import { FirstYearPage } from '../pages/first-year/first-year';
import { SecondYearPage } from '../pages/second-year/second-year';
import { ThirdYearPage } from '../pages/third-year/third-year';
import { FourthYearPage } from '../pages/fourth-year/fourth-year';
import { FifthYearPage } from '../pages/fifth-year/fifth-year';
import { SixthYearPage } from '../pages/sixth-year/sixth-year';
import { GradePage } from '../pages/grade/grade';
import { FirstlyGradePage } from '../pages/firstly-grade/firstly-grade';

import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstYearPage ,
    SecondYearPage ,
    ThirdYearPage ,
    FourthYearPage ,
    FifthYearPage ,
    SixthYearPage ,
    GradePage,
    FirstlyGradePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp) ,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstYearPage ,
    SecondYearPage ,
    ThirdYearPage ,
    FourthYearPage ,
    FifthYearPage ,
    SixthYearPage ,
    GradePage,
    FirstlyGradePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileTransfer,
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VideoProvider
  ]
})
export class AppModule {}

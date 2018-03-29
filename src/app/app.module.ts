import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from '@ionic-native/native-storage';
import { FormsModule } from '@angular/forms';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { RandomCardsPage } from '../pages/random-cards/random-cards';
import { HttpModule } from '@angular/http';
import { LongPressModule } from 'ionic-long-press';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    RandomCardsPage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    LongPressModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPage,
    RandomCardsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeStorage,
  ]
})
export class AppModule {}

import { Component, ViewChild} from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { TabsPage } from '../pages/tabs/tabs';
import { SosPage } from '../pages/sos/sos';
import { EventPage } from '../pages/event/event';
import { FacePage } from '../pages/face/face';
import { NewsdetailsPage } from '../pages/newsdetails/newsdetails';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController;
  rootPage:any = TabsPage;
  public pages: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private signal: OneSignal) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.oneSignalInit();
    });

    //pages
    this.pages = [
      {'title':'Home','component':TabsPage,'icon':'home'},
      {'title':'SOS Face Of The Week','component':FacePage,'icon':'person'},
      {'title':'Events This Week','component':EventPage,'icon':'calendar'},
      {'title':'About SOS','component':SosPage,'icon':'mail'},
    ];
    
  }

  openPage(com){
    this.nav.setRoot(com);
  }

  oneSignalInit(){
    this.signal.startInit('4272e01f-6262-4ab6-a3b9-283dd58e0b9a', '1054577235864');
    this.signal.inFocusDisplaying(this.signal.OSInFocusDisplayOption.InAppAlert);
    
    this.signal.handleNotificationReceived().subscribe(() => {
     // do something when notification is received
    });
    
    this.signal.handleNotificationOpened().subscribe((jsonData) => {
      // do something when a notification is opened
      let addData = jsonData.notification.payload.additionalData;
      this.nav.push(NewsdetailsPage, {'id': addData});
    });
    
    this.signal.endInit();
  }
}

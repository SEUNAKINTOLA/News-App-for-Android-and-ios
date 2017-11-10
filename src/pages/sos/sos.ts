import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


/**
 * Generated class for the SosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sos',
  templateUrl: 'sos.html',
})
export class SosPage {
  public page: any;
  public title: any;
  public src: any;
  public footer: any;
  public dater: any;
  public category: any;
  public active: boolean = false;
  public show: boolean = false;
  public item: any = "";
  public url: any = "";
  public id: any = "";
  public comment: any;
  constructor(public toastCtrl: ToastController, public dataService: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getPage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SosPage');
  }
  getPage(){
    this.active = false;
    this.show = false;
    this.dataService.fetchSingleAbout().subscribe(
      (res) => {
        this.active = true;
        this.show = true;
        this.page = res.content.rendered;
        var d = new Date();
        this.footer = "&copy; SOSNATION "+d.getFullYear();
        console.log(this.comment);
      },
      (err) => {
        this.active = true;
        this.show = false;
        this.toastCtrl.create({
          message: 'A network error occurred!',
          duration: 3000
        }).present();
      }
    )
  }

}

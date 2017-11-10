import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { NewsdetailsPage } from '../newsdetails/newsdetails';
import { SearchPage } from '../search/search';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  public lists: any = [];
  public active: boolean = false;
  public show: boolean = false;
  public id: number = 25;
  constructor(public modalCtrl: ModalController, public toastCtrl: ToastController, public fetchService: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getNews(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  getNews(item){
    this.active = false;
    this.show = false;
    this.fetchService.fetchNewsEvent(item).subscribe(
      (res) => {
        
        this.active = true;
        this.show = true;
        this.lists = res;
        console.log(res);
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

  getFreshNews($event){
    this.id = this.id + 25;
    this.fetchService.fetchNewsEvent(this.id).subscribe(
      (res) => {
        $event.complete();
        this.active = true;
        this.show = true;
        this.lists = res;
        console.log(res);
      },
      (err) => {
        this.id = this.id - 25;
        $event.complete();
        this.active = true;
        this.show = false;
        this.toastCtrl.create({
          message: 'A network error occurred!',
          duration: 3000
        }).present();
      }
    )
  }

  showNews(id){
    this.modalCtrl.create(NewsdetailsPage, {"id": id}).present();
  }

  goToSearch(){
    this.modalCtrl.create(SearchPage).present();
  }

}

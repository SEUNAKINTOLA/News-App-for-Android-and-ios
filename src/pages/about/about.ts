import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { NewsdetailsPage } from '../newsdetails/newsdetails';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public lists: any = [];
  public active: boolean = false;
  public show: boolean = false;
  public id: number = 25;
  constructor(public modalCtrl: ModalController, public toastCtrl: ToastController, public fetchService: DataProvider, public navCtrl: NavController) {
    this.getNews(this.id);
  }

  getNews(item){
    this.active = false;
    this.show = false;
    this.fetchService.fetchNewsDF(item).subscribe(
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
    this.fetchService.fetchNewsDF(this.id).subscribe(
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { NewsdetailsPage } from '../newsdetails/newsdetails';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public lists: any = [];
  public active: boolean = false;
  public show: boolean = false;
  public pic: boolean = true;
  public result: any;
  public term: any;
  public search: any = "";
  constructor(public modalCtrl: ModalController, public toastCtrl: ToastController, public fetchService: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    // this.getNews();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  searchItem($search){
    if($search == ""){
      this.toastCtrl.create({
        message: 'No search parameter found!',
        duration: 3000
      }).present();
    }else{
    this.active = false;
    this.show = false;
    this.pic = false;
    this.fetchService.fetchNewsSearch($search).subscribe(
      (res) => {
        
        this.active = true;
        this.show = true;
        this.lists = res;
        this.result = this.lists.length;
        this.term = $search;
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
}

  showNews(id){
    this.modalCtrl.create(NewsdetailsPage, {"id": id}).present();
  }

}

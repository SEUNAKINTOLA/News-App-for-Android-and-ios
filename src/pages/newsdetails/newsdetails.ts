import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { SocialSharing } from '@ionic-native/social-sharing';



/**
 * Generated class for the NewsdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsdetails',
  templateUrl: 'newsdetails.html',
})
export class NewsdetailsPage {

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
  
  constructor(public share: SocialSharing, public toastCtrl: ToastController, public dataService: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.fetchNews( this.id );
    console.log(this.navParams.get('id'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsdetailsPage');
  }

  fetchNews(data: any){
    this.active = false;
    this.show = false;
    this.dataService.fetchSingle(data).subscribe(
      (res) => {
        this.active = true;
        this.show = true;
        this.page = res.content.rendered;
        this.src = res._embedded['wp:featuredmedia'][0].source_url;
        this.comment = (res._embedded['replies']) ? res._embedded['replies'][0].length : 0;
        this.title = res.title.rendered;
        this.dater = res.date;
        this.url = res.link;
        this.item = res.excerpt.rendered;
        this.category = res._embedded['wp:term'][0][0].name;
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
    );
  }

  shareNews(){
    this.share.share(this.item,this.title,this.src,this.url).then(
      (res) => {

      },
      (err) => {
        this.toastCtrl.create({
          message: 'Could not share, try again!',
          duration: 3000
        }).present()
      }
    )
  }

}

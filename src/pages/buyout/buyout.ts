import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {
  productData: { name: string, quantity: number };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productData = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

  onGoBack() {
    this.navCtrl.pop();
  }

  onGoRoot() {
    this.navCtrl.popToRoot();
  }

}

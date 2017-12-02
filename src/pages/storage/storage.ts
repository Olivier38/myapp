import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

//native
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the StoragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {
	name: string;
	surname: string;
	years: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoragePage');
  }

  public storeIdentity(): void {
  	this.nativeStorage.setItem('my-identity-card', {
  		name: this.name, 
  		surname: this.surname, 
  		years: this.years,
  	})
  	.then(
    	() => {
		  let alert = this.alertCtrl.create({
		    title: 'Done !',
		    subTitle: 'Data saved',
		    buttons: ['Dismiss']
		  });
		  alert.present();
		},
    	error => console.error('Error storing item', error)
  );
  }
  public getMyName(): void {
    this.nativeStorage.getItem('my-identity-card')
    .then(
      data => {
         this.name = data.name;
         this.surname = data.surname;
         this.years = data.years;
      },
      error => console.error(error)
    );
  }
}

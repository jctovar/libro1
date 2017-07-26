import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private iap: InAppBrowser) {

  }

  openLink(cap: number){
    
    switch(cap) { 
      case 1: { 
          this.iap.create("assets/content/cap1.html"); 
          break; 
      } 
      case 2: { 
          this.iap.create("assets/content/cap2.html"); 
          break; 
      }
      case 3: { 
          this.iap.create("assets/content/cap3.html"); 
          break; 
      } 
      case 4: { 
          this.iap.create("assets/content/cap4.html"); 
          break; 
      } 
      case 5: { 
          this.iap.create("assets/content/cap5.html"); 
          break; 
      } 
      case 6: { 
          this.iap.create("assets/content/cap6.html"); 
          break; 
      }
      case 7: { 
          this.iap.create("assets/content/cap7.html"); 
          break; 
      } 
      case 8: { 
          this.iap.create("assets/content/cap8.html"); 
          break; 
      } 
      case 9: { 
          this.iap.create("assets/content/cap9.html"); 
          break; 
      }  
      default: { 
          //statements; 
          break; 
      } 
    } 

  }
}

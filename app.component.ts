import { Component, SystemJsNgModuleLoader } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WorkApp';

   

  mobiles:any[]= [{'Name':'OnePlus1','Quantity':1},{'Name':'OnePlus2','Quantity':1},{'Name':'OnePlus3','Quantity':1}];


  OnQty(i){

   this.mobiles[i].Quantity++;

  }

  DecQty(i){
    this.mobiles[i].Quantity--;
         
  }



}

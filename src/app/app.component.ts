import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ShoppingListService, LoggingService, RecipeService]
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD7ihT7t6sjcC896ni0s5n303GVTRhKO0s',
      authDomain: 'ng-recipe-book-623ba.firebaseapp.com'
    });
  }


}

import { Component, OnInit } from '@angular/core';
// import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
import firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import "firebase/firestore";
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp(environment.firebaseConfig);
    firebase.analytics();


  }
  public isOpen: boolean = false;

  title = 'widget-afterschool';

}

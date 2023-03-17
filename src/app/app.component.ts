import {Component, OnInit} from '@angular/core';

import { initializeApp } from "firebase/app";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyA0xyIcbdITcYZcpXCrFLcbnoW2EN8OyAo",
      authDomain: "alternova-27f14.firebaseapp.com",
      projectId: "alternova-27f14",
      storageBucket: "alternova-27f14.appspot.com",
      messagingSenderId: "680690140296",
      appId: "1:680690140296:web:8899b35afe333ae8284b3d"
    };

    const app = initializeApp(firebaseConfig);
  }
}

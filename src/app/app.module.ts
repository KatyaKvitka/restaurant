import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule, MatToolbarModule} from  '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


var config = {
  apiKey: "AIzaSyBVEYbO4XiEMRTayjgTevzDf_K5KHwecKQ",
  authDomain: "restaurant-bucket.firebaseapp.com",
  databaseURL: "https://restaurant-bucket.firebaseio.com",
  projectId: "restaurant-bucket",
  storageBucket: "restaurant-bucket.appspot.com",
  messagingSenderId: "170282094121",
  appId: "1:170282094121:web:48ec0e9b73cdcb08"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,

    MatButtonModule,
    MatToolbarModule,

    BrowserAnimationsModule,
    MatMenuModule
  ],
  exports: [MatButtonModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
